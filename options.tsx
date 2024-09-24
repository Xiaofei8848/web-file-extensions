const handleRemoveAllFile = async (
  directoryHandle: FileSystemDirectoryHandle
) => {
  for await (const [key] of directoryHandle.entries()) {
    directoryHandle.removeEntry(key)
  }
}

const Index = () => {
  const handleClick = async () => {
    console.log("click")
    //https://developer.mozilla.org/zh-CN/docs/Web/API/Window/showDirectoryPicker
    const dirHandle = await window.showDirectoryPicker({ mode: "readwrite" })

    const manifestHandle = await dirHandle.getFileHandle("manifest.json", {
      create: true
    })
    const manifestFileData = await (await manifestHandle.getFile()).text()

    const newManifestFileData = JSON.parse(manifestFileData)
    newManifestFileData.version = "0.0.2"

    const newData = new Blob([JSON.stringify(newManifestFileData)], {
      type: "application/json"
    })
    const writable = await manifestHandle.createWritable()
    await writable.write(newData)
    await writable.close()
  }

  return <button onClick={handleClick}>test</button>
}

export default Index
