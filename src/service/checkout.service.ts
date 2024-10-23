import { api } from "./api";

interface CheckoutProps{
    id : number;
    amount : number;
}
const Token = localStorage.getItem("@token");
const headers = Token
?{
    Authorization: `Bearer ${Token}`,
}
:{};

export const checkout = async (id: number|string): Promise<string> =>{
    const {data} = await api.post(`/order/${id}/payment`, null,{headers});
    return data.payment_url;
}

export const order = async (cart:CheckoutProps[]): Promise<string>=> {
 
const body = {
    vehicles: cart.map((item: CheckoutProps) =>({
        vehicleId: item.id,
        amount: item.amount,
    })),
};
const {data} = await api.post("/order", body, {headers});
return data.id;
};