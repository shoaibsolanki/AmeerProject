import React, { useEffect, useState, type ChangeEvent } from "react";
import { X, Upload } from "lucide-react";
import {
  AddAnnouncement,
  Deleteannouncement,
  Updateannouncement,
} from "../../../services/Announcement/Announcementapi";
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

interface Props {
  isOpen: boolean;
  onClose: () => void;
  fetchAnnouncements: () => void;
  isEdit?: boolean;
  selectedEdit?: Announcement;
}

const CreateAnnouncementModal: React.FC<Props> = ({
  isOpen,
  onClose,
  fetchAnnouncements,
  isEdit,
  selectedEdit,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [publishNow, setPublishNow] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handleAddAnnouncement = async () => {
    if (isSubmitting) return;

    // Basic validation
    if (!title.trim()) {
      enqueueSnackbar("Title is required", { variant: "error" });
      return;
    }
    if (!subtitle.trim()) {
      enqueueSnackbar("Subtitle is required", { variant: "error" });
      return;
    }

    if (image) {
      const validTypes = ["image/png", "image/jpeg"];
      if (!validTypes.includes(image.type)) {
        enqueueSnackbar("Image must be PNG or JPG", { variant: "error" });
        return;
      }
      const maxSize = 2 * 1024 * 1024; // 2MB
      if (image.size > maxSize) {
        enqueueSnackbar("Image must be smaller than 2MB", { variant: "error" });
        return;
      }
    }

    try {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", subtitle);
      formData.append("publishNow", String(publishNow));
      if (image) formData.append("image", image);

      const response =
        isEdit && selectedEdit
          ? await Updateannouncement(selectedEdit._id, formData)
          : await AddAnnouncement(formData);

      if (response && response.success) {
        enqueueSnackbar(response.message, {
          variant: "success",
        });
        fetchAnnouncements();
        setTitle("");
        setSubtitle("");
        setImage(null);
        setPublishNow(false);
        onClose();
      } else {
        enqueueSnackbar(response?.message || "Failed to create announcement", {
          variant: "error",
        });
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar("An unexpected error occurred", { variant: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isEdit && selectedEdit) {
      setTitle(selectedEdit?.title);
      setSubtitle(selectedEdit?.description);
    } else {
      setTitle("");
      setSubtitle("");
    }
  }, [isEdit]);

  const handleDelete = async () => {
    try {
      if (!selectedEdit) return;
      const response = await Deleteannouncement(selectedEdit?._id);
      if (response.success) {
        enqueueSnackbar(response?.message, { variant: "success" });
        fetchAnnouncements();
        onClose();
      } else {
        enqueueSnackbar(response?.message, { variant: "error" });
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Failed to delete", { variant: "error" });
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-[#0A0A0A] rounded-xl w-full max-w-2xl shadow-xl border border-[#2b2d33] text-white relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#2b2d33] p-5">
          <h2 className="text-[18px] font-medium">Create New Announcement</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter announcement title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#1A1A1A] text-white text-sm rounded-md border border-[#2f3138] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#2578F4]"
            />
          </div>

          {/* Subtitle */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Subtitle <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Enter announcement subtitle or description"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              rows={2}
              className="w-full bg-[#1A1A1A] text-white text-sm rounded-md border border-[#2f3138] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#2578F4]"
            />
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Featured Image
            </label>
            <label
              htmlFor="image-upload"
              className="flex flex-col items-center justify-center bg-[#1A1A1A] border border-[#2f3138] rounded-md cursor-pointer py-10 hover:bg-[#26272e] transition"
            >
              <Upload size={28} className="text-gray-400 mb-2" />
              {image ? (
                <span className="text-sm text-gray-300">{image.name}</span>
              ) : (
                <>
                  <span className="text-sm text-[#9CA3AF]">
                    Click to upload image
                  </span>
                  <span className="text-[12px] text-gray-500 mt-1">
                    PNG, JPG up to 2MB, Aspect Ratio 16:9
                  </span>
                </>
              )}
              <input
                id="image-upload"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* Publish Toggle */}
          <div className="flex items-center justify-between bg-[#1A1A1A] border border-[#2f3138] rounded-md px-4 py-3">
            <div>
              <div className="font-medium text-[14px]">Publish Immediately</div>
              <div className="text-[12px] text-gray-400">
                Make this announcement visible to users
              </div>
            </div>
            <button
              onClick={() => setPublishNow(!publishNow)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                publishNow ? "bg-[#2578F4]" : "bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                  publishNow ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#2b2d33] p-5">
          <button
            onClick={handleDelete}
            disabled={!isEdit}
            className="text-red-500 text-sm hover:underline disabled:text-gray-500"
          >
            Delete this Announcement
          </button>

          <div className="flex gap-3">
            <button
              onClick={() => {
                onClose();
              }}
              className="bg-[#23242a] text-white px-4 py-2 rounded-md text-sm hover:bg-[#2f3038] transition"
            >
              Preview
            </button>
            <button
              onClick={() => {
                handleAddAnnouncement();
              }}
              className="btn-primary"
            >
              Save as Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAnnouncementModal;
