import { useLocalizedStringFormatter } from "react-aria";

import resourcesEnUS from "../intl/en-US.json";
import resourcesFrFR from "../intl/fr-FR.json";

const Resources = {
    "en-US": resourcesEnUS,
    "fr-FR": resourcesFrFR
};

export function useLocalizedString() {
    return useLocalizedStringFormatter(Resources, "my-custom-lib");
}
