import request, { getFullUrl } from "../lib/request";

export const redeemPromocode = (promoCode) => {
  return request("POST", getFullUrl("billing", "/v1/promocodes/redeem"), {
    promoCode,
  }).then((d) => d.data);
};
