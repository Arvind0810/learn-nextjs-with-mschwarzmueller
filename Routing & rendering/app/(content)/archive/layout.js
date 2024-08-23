export default function ArvhiveLayout({archive, latest}){
    return (
        <>
            <h1>News Archive</h1>
            <section id="arvhive-filter" >
                {archive}
            </section>
            <section id="arvhive-latest" >
                {latest}
            </section>
        </>
    )
}