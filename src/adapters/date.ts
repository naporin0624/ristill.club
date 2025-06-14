import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isLeapYear from "dayjs/plugin/isLeapYear";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

// Initialize dayjs plugins as side effects
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(isLeapYear);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

// Set default timezone to Asia/Tokyo
dayjs.tz.setDefault("Asia/Tokyo");
