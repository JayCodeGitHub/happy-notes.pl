import { ActionType } from "./action-types";
import { Dispatch } from "redux";

export const addItem = (itemType: string, title: string, body?: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.ADDITEM,
      itemType,
      title,
      body,
    });
  };
};

export const removeItem = (title: string, itemType: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.REMOVEITEM,
      title,
      itemType,
    });
  };
};

export const setStatus = (title: string, itemType: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.SETSTATUS,
      title,
      itemType,
    });
  };
};

export const fetchItems = () => {
  return async (dispatch: Dispatch) => {
    let items = { note: [], todo: [], site: [] };
    if (!localStorage.getItem("happy-notes")) {
      localStorage.setItem(
        "happy-notes",
        JSON.stringify({ note: [], todo: [], site: [] })
      );
    } else {
      items = JSON.parse(localStorage.getItem("happy-notes") || "");
    }
    dispatch({
      type: ActionType.FETCHITEMS,
      items,
    });
  };
};
