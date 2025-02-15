export default function PublicLayout({ children
}: Readonly <{ children: React.ReactNode }>) {
    return(
        <div>
            {/* <h1 className="text-6xl text-center">Rota Publica</h1> */}
            {children}
        </div>
    )
}