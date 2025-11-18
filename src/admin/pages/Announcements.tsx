import React, { useEffect, useState } from "react";
import CreateAnnouncementModal from "../componants/Modal/CreateAnnouncementModal";
import {
  GetAnnouncement,
  Updatestatus,
} from "../../services/Announcement/Announcementapi";
import { useSnackbar } from "notistack";

interface Announcement {
  _id: string;
  image: string;
  title: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Announcements: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState<Announcement>();
  const { enqueueSnackbar } = useSnackbar();
  const fetchAnnouncements = async () => {
    const data = await GetAnnouncement();
    setAnnouncements(data.data);
    console.log(data?.data);
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleUpdatestatus = async (id: string, status: boolean) => {
    try {
      const response = await Updatestatus(id, { status });
      if (response.success) {
        enqueueSnackbar(response?.message, { variant: "success" });
        fetchAnnouncements();
      } else {
        enqueueSnackbar(response?.message, { variant: "error" });
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Error occur", { variant: "error" });
    }
  };

  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
  };

  return (
    <div className="bg-[#0A0A0A] rounded-2xl border-2 border-[#FFFFFF1A] p-[22px_28px_34px] shadow-lg shadow-[#10101080] w-full max-w-[1000px] mx-auto">
      <div className="flex justify-between items-center font-medium text-[#eee] text-[16px] mb-5">
        <h1>Existing Announcements</h1>
        <button onClick={() => setOpen(true)} className="btn-primary">
          + New Announcement
        </button>
        <CreateAnnouncementModal
          fetchAnnouncements={fetchAnnouncements}
          isOpen={open}
          onClose={handleClose}
          isEdit={isEdit}
          selectedEdit={selectedEdit}
        />
      </div>

      {/* Add new button */}
      {/* <div className="text-right mb-5">
    </div> */}

      {/* Announcements list */}
      {announcements.map((a) => (
        <div
          key={a._id}
          className="flex items-start bg-[#1A1A1A] rounded-xl mb-4 shadow-md shadow-[#22222233] p-[14px_16px]"
        >
          <img
            // src={ a.image}
            src="/lableImage.png"
            alt=""
            className="w-[200px] h-[156px] rounded-md object-cover mr-[18px]"
          />

          <div className="flex-1">
            <div className="font-medium text-[15px] text-white mb-1">
              {a.title}
            </div>
            <div className="text-[#bdbdbd] text-[13px]">{a.description}</div>
            <div className="text-[#888] text-[12px] mt-2">
              Created on : {a.createdAt}
            </div>

            {/* Action buttons */}
            <div className="mt-3 flex gap-[10px]">
              <button className="bg-black text-[#eee] rounded-md text-[13px] font-medium py-[5px] px-[15px] hover:bg-[#111] transition">
                Preview
              </button>
              <button
                onClick={() => {
                  setIsEdit(true);
                  setOpen(true);
                  setSelectedEdit(a);
                }}
                className="bg-black cursor-pointer text-[#eee] rounded-md text-[13px] font-medium py-[5px] px-[15px] hover:bg-[#111] transition"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  handleUpdatestatus(a._id, !a.status);
                }}
                className={`rounded-md text-[13px] font-medium py-[5px] px-[15px] text-white transition ${
                  a.status
                    ? "bg-[#e23c32] hover:bg-[#c93028]"
                    : "bg-[#2578F4] hover:bg-[#1d66d1]"
                }`}
              >
                {a.status ? "Deactivate" : "Activate"}
              </button>
            </div>
          </div>

          {/* Status tag */}
          <div
            className={`self-start ml-[18px] rounded-md py-[3px] px-[15px] font-medium text-[13px] min-w-[59px] text-center ${
              a.status
                ? "bg-[#213b23] text-[#39ff73]"
                : "bg-[#22282A] text-[#b5b5b5]"
            }`}
          >
            {a.status ? "Activate" : "Deactivate"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
