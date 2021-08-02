import { Nulleable } from "core/types/Nulleable";

export class LocalStorage {
  public static readonly id: Nulleable<string> = localStorage.getItem("id");

  public static readonly token: Nulleable<string> = localStorage.getItem("token");
  
  public static addValue(payload: { key: string; value: string }): void {
    localStorage.setItem(payload.key, payload.value);
  }
}
