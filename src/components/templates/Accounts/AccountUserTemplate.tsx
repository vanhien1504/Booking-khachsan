// import { toast } from "react-toastify";
// import { Input, Button } from "components";
// import { ListUserServices } from "services";

import { AccountInfo, BookingHistory, Tabs } from "components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ListUserServices } from "services";
import { UploadOutlined } from "@ant-design/icons";
import { RootState, useAppDispatch } from "store";
import { EditUserThunk } from "store/DanhSachThanhVien";
import { getUserInfoLocal } from "utils";

const AccountUserTemplate = () => {
  const localUser = getUserInfoLocal();
  const dispatch = useAppDispatch();
  const { EditUser } = useSelector((state: RootState) => state.ListReducer);
  const [photoUpload, setPhotoUpload] = useState<File>();

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("formFile", photoUpload);
    ListUserServices.UploadUser(formData);
  };
  useEffect(() => {
    dispatch(EditUserThunk(localUser?.id));
  }, [dispatch, localUser.id]);
  return (
    <div className=" flex  justify-center mt-[150px]">
      <div className="account__bg"></div>
      <div className="account__container smM:!block">
        <div className="account__avatar">
          <div className="text-center flex-column align-items-center h-100 justify-content-center">
            <div className="flex justify-content-center py-2">
              <form>
                <img
                  src={EditUser?.avatar}
                  alt=""
                  className="rounded-[50%] w-[150px] h-[150px] !text-center mb-16"
                />

                <input
                  type="file"
                  className="w-[74px]"
                  onChange={(ev) => {
                    setPhotoUpload(ev.target.files[0]);
                  }}
                />
                <button
                  className="edit-btn"
                  type="button"
                  onClick={() => {
                    handleUpload();
                    dispatch(EditUserThunk(localUser?.id));
                  }}
                >
                  <UploadOutlined />
                </button>
              </form>
            </div>
            <div className="comments-name">{EditUser?.name}</div>
          </div>
        </div>
        <div className="px-[25px] mdM:px-[10px]">
          <Tabs
            tabPosition="top"
            items={[
              {
                key: "accountInfo",
                label: "Thông tin tài khoản",
                children: <AccountInfo />,
              },
              {
                key: "Lịch sử đặt phòng",
                label: "Lịch sử đặt phòng",
                children: <BookingHistory />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountUserTemplate;
