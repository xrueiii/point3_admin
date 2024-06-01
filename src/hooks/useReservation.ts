export default function useReservation() {
    const getReservedRooms = async(roomId: string, date: string) => {
        try {
            const res = await fetch("/api/reserved", {
              method: "POST",
              body: JSON.stringify({
                roomId,
                date,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });

            const data = await res.json();
      
            return data.reservedRooms;
          } catch (error) {
            console.log(error);
          }
    };

    const deleteReservation = async(roomId: string, date: string, span:string, email:string, roomName: string, name:string) => {
      try {
          const res = await fetch("/api/reserved", {
            method: "DELETE",
            body: JSON.stringify({
              roomId,
              date,
              span,
              email,
              roomName,
              name,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (res.ok) {
            const data = await res.json();
            if (data.message) {
              return true;
            }
            else {
              return false;
            }
          }       
          
        } catch (error) {
          console.log(error);
        }
  };

    

    
    return ({
      getReservedRooms,
      deleteReservation,
    });
}