import "styled-components";
import { ColorTypes, FontSizeTypes, fontSizeTypes } from "./theme";

declare module "styled-components"{
    export interface DefaultTheme{
        colors: ColorTypes;
        fontSize: FontSizeTypes;
    }
}