import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IBasket, ITelegramData } from "types/basketType";

type BasketState = {
    basketdata: IBasket[];
};

const initialState: BasketState = {
    basketdata: [],
};

export const sendDataToTelegram = createAsyncThunk<
    void,
    ITelegramData,
    { rejectValue: string }
>("basket/sendDataToTelegram", async (data, { rejectWithValue }) => {
    try {
        const response = await fetch("/api/sendToTelegram", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error("Can't send data to Telegram");
        }
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

const basketdataListSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        basketAddItems: (state, action: PayloadAction<IBasket>) => {
            const itemIndex = state.basketdata.findIndex(
                (item) => item.id === action.payload.id
            );
            itemIndex < 0
                ? (state.basketdata = [...state.basketdata, action.payload])
                : (state.basketdata = state.basketdata.map((item, index) => {
                      if (index === itemIndex) {
                          return {
                              ...item,
                              quantity: item.quantity + action.payload.quantity,
                          };
                      } else {
                          return item;
                      }
                  }));
        },

        basketRemoveItems: (state, action: PayloadAction<string>) => {
            const newOrder = state.basketdata.filter(
                (item) => item.id !== action.payload
            );
            state.basketdata = newOrder;
        },

        basketRemoveQuantity: (state, action: PayloadAction<string>) => {
            state.basketdata.forEach((item) => {
                if (item.id === action.payload) {
                    item.quantity > 1
                        ? (item.quantity -= 1)
                        : (item.quantity = 1);
                }
            });
        },

        basketAddQuantity: (state, action: PayloadAction<string>) => {
            state.basketdata.forEach((item) => {
                if (item.id === action.payload) {
                    item.quantity += 1;
                }
            });
        },
    },
    extraReducers: (buider) => {
        buider
            .addCase(sendDataToTelegram.fulfilled, (state) => {
                state.basketdata = [];
            })
            .addCase(
                sendDataToTelegram.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    console.log("Something get wrong: ", action.payload);
                }
            );
    },
});

const { actions, reducer } = basketdataListSlice;

export default reducer;
export const {
    basketAddItems,
    basketRemoveItems,
    basketAddQuantity,
    basketRemoveQuantity,
} = actions;
