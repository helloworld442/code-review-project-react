import { useSyncExternalStore } from "react";
import ReviewStore from "../stores/reviewStore";

const reviewStore = new ReviewStore();

export default function useReviewStore() {
  const snapshot = useSyncExternalStore(
    (onChangeStore) => {
      reviewStore.addEventListener(onChangeStore);

      return () => reviewStore.removeEventListener(onChangeStore);
    },
    () => reviewStore.getSnapshot()
  );

  return [snapshot, reviewStore];
}
