import {Router} from 'react-router-dom'

export const deleteReport = (report) => {
    console.log("action", report);
  return(dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firestore
      .collection("articles")
      .doc(report)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_REPORT", report });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_REPORT_ERR", err });
      });
  };
};

