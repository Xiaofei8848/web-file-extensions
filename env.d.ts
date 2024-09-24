interface Window {
  showDirectoryPicker: (option?: {
    mode: "read" | "readwrite"
  }) => FileSystemDirectoryHandle
}

interface FileSystemDirectoryHandle {
  entries: any
}