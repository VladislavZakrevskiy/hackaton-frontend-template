import {
	CaseReducerActions,
	CreateSliceOptions,
	SliceCaseReducers,
	bindActionCreators,
	createSlice,
} from "@reduxjs/toolkit";
import { useAppDispatch } from "../hooks/useAppDispatch/useAppDispatch";
import { useDispatchedActions } from "../hooks/useDispatchedActions/useDispatchedActions";

export const buildSlice = <State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(
	options: CreateSliceOptions<State, CaseReducers, Name>
) => {
	const slice = createSlice(options);

	// @ts-ignore
	const useActions = () => useDispatchedActions<CaseReducerActions<CaseReducers, Name>>(slice.actions);

	return {
		...slice,
		useActions,
	};
};
