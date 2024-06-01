export default function useRoom() {
    const getRoomInfo = async(roomId: string) => {
        try {
            const res = await fetch("/api/room", {
              method: "POST",
              body: JSON.stringify({
                roomId,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });

            const data = await res.json();
      
            return data.roomInfo;
          } catch (error) {
            console.log(error);
          }
    };

    const updateRoomInfo = async(roomId: string, roomName: string, content: string) => {
        try {
            const res = await fetch("/api/room", {
              method: "PUT",
              body: JSON.stringify({
                roomId,
                roomName,
                content,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });

            

            if (res.ok) {
                const data = await res.json();
                return true;
            }
            else {
                return false;
            }
      
          } catch (error) {
            console.log(error);
          }
    };

    
    return ({
      getRoomInfo,
      updateRoomInfo,
    });
}