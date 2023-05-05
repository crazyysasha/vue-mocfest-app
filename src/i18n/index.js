
import useLocale, { beforeChange } from "@/composables/locale";
import { createI18n } from "vue-i18n";

import messages from "./messages";

const { locale, afterChange } = useLocale();

const i18n = createI18n({
    legacy: false,
    locale: locale.value,
    messages,
});

beforeChange((val) => {
    i18n.global.locale = val;
});

export default i18n;