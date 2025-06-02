import {RootState} from "../../store";
export const sidebarOpen = (state: RootState) => state.layout.sidebarIsOpen ?? false;
