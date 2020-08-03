export const compileReport = (report) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().user.currentUser;

    firestore
      .collection("articles")
      .add({
        ...report,
        Writter: profile.displayName,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "ADD_REPORT", report });
      })
      .catch((err) => {
        dispatch({ type: "ADD_REPORT_ERR", err });
      });
  };
};
