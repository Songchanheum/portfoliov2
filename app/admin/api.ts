export function getChatAllMessage(
  setChatData: React.Dispatch<React.SetStateAction<string[]>>
) {
  fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL || "https://songsintroduce.vercel.app/"
    }api/admin`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      setChatData(jsonData);
    });
}
export function getChatMessage(
  chatNum: string,
  setChatData: React.Dispatch<React.SetStateAction<ChatType[]>>
) {
  fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL || "https://songsintroduce.vercel.app/"
    }api/chat?num=${encodeURIComponent(chatNum)}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      setChatData(jsonData);
    });
}
export function postChatReceive(
  chatNum: string,
  sendMessage: string,
  finish: () => void
) {
  fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL || "https://songsintroduce.vercel.app/"
    }api/admin`,
    {
      method: "POST",
      body: JSON.stringify({ num: chatNum, message: sendMessage }),
    }
  ).then(function (response) {
    if (response.ok) {
      finish();
    }
  });
}
