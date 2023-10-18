import { NotFoundPage } from "@/pages/NotFoundPage";
import { type RouteProps } from "react-router-dom";
import { LazyMainPage } from "@/pages/MainPage";
import { UserRoles } from "@/entities/User";
import { AppRoutes, getRouteMain, getRouteNotFound } from "@/shared/consts/router";
import { AppRouteProps } from "@/shared/types/router";

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <LazyMainPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
};
