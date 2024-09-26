import axios, { AxiosError, AxiosResponse } from "axios";
import { get } from "lodash";
import { useState } from "react";
import { message } from "../components/common/toastManager";
import { defaultError } from "../lib/constants";

interface Props {
  url: string;
  onSuccess?: Function;
  onError?: Function;
  onSuccessData?: Function;
  onErrorData?: Function;
  showSuccessMessage?: boolean;
  successMessage?: string;
}

interface initialState {
  data: any;
  error: boolean;
  loading: boolean;
}

const useCallApi = (props: Props) => {
  const {
    url,
    onError,
    onSuccess,
    onSuccessData,
    onErrorData,
    showSuccessMessage,
    successMessage,
  } = props;
  const initial = {
    data: {},
    error: false,
    loading: false,
  };
  const [state, setState] = useState<initialState>(initial);
  const { loading, error, data } = state;

  const getData = async (body: any = {}) => {
    await setState({ ...state, loading: true });
    const response = await axios
      .post(url, body)
      .then((res: AxiosResponse) => {
        return res.data;
      })
      .catch((e: AxiosError) => {
        console.error("Network Error");
      });
    await setState({ ...state, loading: false });
    return response;
  };

  const callApi = async (body: any = {}) => {
    const response = await getData(body);
    const responseCode = get(response, "responseCode", "1");
    const responseDescription = get(
      response,
      "responseDescription",
      "Something went wrong"
    );
    if (responseCode == "0") {
      await setState({ ...state, data: response });
      onSuccess && onSuccess();
      onSuccessData && onSuccessData(response);
      showSuccessMessage &&
        message({ type: "success", text: responseDescription });
    } else {
      await setState({ ...state, error: true, data: response });
      onError && onError();
      onErrorData && onErrorData(response || defaultError);
      message({ type: "error", text: successMessage || responseDescription });
    }
  };

  return { callApi, loading, error, data };
};

export default useCallApi;
