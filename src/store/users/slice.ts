import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = [
	{
		id: "1",
		name: "Laura White",
		email: "laura@ypix.com",
		github: "laurawypix",
	},
	{
		id: "2",
		name: "Miguel Angel Duran",
		email: "midudev@ypix.com",
		github: "midudev",
	},
	{
		id: "3",
		name: "Francisco Vasquez",
		email: "francisco@ypix.com",
		github: "frankjr28",
	},
	{
		id: "4",
		name: "Melina Hernandez",
		email: "melina@ypix.com",
		github: "melina",
	},
];

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			//console.log("id  is" + id);
			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions;
