export function setCityData(obj) {
  return {
    type: "CITY_DATA",
    payload: obj,
  };
}

export function setExpandedCards(val) {
  return {
    type: "EXPANDED_CARDS",
    payload: val,
  };
}