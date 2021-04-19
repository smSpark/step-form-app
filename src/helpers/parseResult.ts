import { GetCalcResultResponse } from "../api/types";

interface ParsedResult {
  status: "Ошибка" | "Успешно",
  message: string,
}

export const parseResult = (result: GetCalcResultResponse | null): ParsedResult => {
  const parsed: ParsedResult = {
    status: "Ошибка",
    message: "Произошла какая-то ошибка!",
  };

  if (!result) return parsed;
  if (result.result === "ok") parsed.status = "Успешно";
  parsed.message = result.message;
  return parsed;
};
