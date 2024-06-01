"use client";

import useRoom from "@/hooks/useRoom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

type EditDialogprops = {
  open: boolean;
  onClose: () => void;
  roomName: string;
  roomId: string;
  roomContent: string;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function EditDialog({
  open,
  onClose,
  roomName,
  roomId,
  roomContent,
  setValue,
}: EditDialogprops) {
    const [name, setName] = useState<string>(roomName);
    const [content, setContent] = useState<string>(roomContent);
    const { updateRoomInfo } = useRoom();

    const handleEdit = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const success = await updateRoomInfo(roomId, name, content);
            if (success) {
                alert("編輯成功!請重新送出查詢！");
                onClose();
                setValue(false);
            }
            else {
                alert("編輯失敗");
                onClose();
            }      
            
        } catch(e) {
           console.log(e);
        }
        
        
         
    }
    

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-center text-xl mt-4 font-semibold">
        練團室資訊
      </DialogTitle>
      <DialogContent>
        <div className="flex-col space-y-8 px-16 py-4 font-normal">
            <p>練團室名稱：</p>
            <div className="w-full flex border-black border-2 text-black rounded-md items-center">
                <input
                    type="text"
                    className="w-full rounded-md text-xl p-2 text-black placeholder-gray-500"
                    placeholder="練團室名稱"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <p>練團室內容：</p>
            <div className="w-full flex border-black border-2 text-black placeholder-gray-30 rounded-md items-center">
                
                <textarea
                    rows={5}
                    className="w-full rounded-md overflow-scroll text-xl p-2 text-black placeholder-gray-500"
                    placeholder="練團室介紹"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
        </div> 
      </DialogContent>
      <DialogActions>
        <div className="w-full h-full flex justify-center">
          <div className="flex gap-4 py-12">
            <button
              className="w-full px-12 py-4 rounded-md font-medium text-white bg-gray-300 hover:bg-gray-500"
              onClick={onClose}
            >
              取消
            </button>
            <button className="w-full py-4 px-12 rounded-md font-medium text-black bg-[#FFE900] hover:bg-yellow-400" onClick={(e) => handleEdit(e)}>
              編輯
            </button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
}
