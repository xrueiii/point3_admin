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

    
    return ({
      getReservedRooms,
    });
}