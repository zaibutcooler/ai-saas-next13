import Image from "next/image"

const Loading = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="h-20 w-20 relative animate-spin">
        <Image alt="Logo" src="/states/loading.png" fill />
      </div>
      <p className="text-sm text-muted-foreground">
        Ai is thinking how to replace you...
      </p>
    </div>
  )
}

export default Loading
