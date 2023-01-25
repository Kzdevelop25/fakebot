const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
  return [
    "Perkenalkan nama saya botrehan. siapa nama kamu?",
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Ohhh ${data?.usia}, hobi kamu apa ya?`,
    `wawww sama dong aku juga hobi ${data?.hobi}, btw sekolah dimana?`,
    `ehh ${data?.sekolah}? wah sama dong aku juga di ${data?.sekolah}. btw ambil jurusan apa?`,
    `ohh kamu jurusan ${data?.jurusan}, maksih ya udh mampir!`,
  ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
  if (jawaban.value.length < 1) return alert("silahkan isi jawaban dulu")
  init++
  if (init === 1) {
    botDelay({ nama: jawaban.value })
  } else if (init === 2) {
    botDelay({ usia: jawaban.value })
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value })
  } else if (init === 4) {
    botDelay({ sekolah: jawaban.value })
  } else if (init === 5) {
    botDelay({ jurusan: jawaban.value })
    finishing()
  } 
  else {
    botEnd()
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block"
  container[0].style.filter = "blur(8px)"
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display = "none"
    container[0].style.filter = "none"
  }, [1000])
  usersData.push(jawaban.value)
  jawaban.value = ""
}

function finishing() {
  jawaban.value = "siap thanks juga!"
}

function botEnd() {
  alert(
    `Terimakasih ${usersData[0]} sudah berkunjung di botrehan, anda akan diarahkan ke halaman utama.`
  )
  window.location.reload()
}
