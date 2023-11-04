import { useSyncExternalStore } from "react";
import AuthStore from "../stores/authStore";

const authStore = new AuthStore();

export default function useAuthStore() {
  const snapshot = useSyncExternalStore(
    (onChangeStore) => {
      authStore.addEventListener(onChangeStore);

      return () => authStore.removeEventListener(onChangeStore);
    },
    () => authStore.getSnapshot()
  );

  return [snapshot, authStore];
}
