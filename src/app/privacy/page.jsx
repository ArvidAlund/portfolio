export default function Privacy(){
    return <div className="mx-auto max-w-3xl px-8 py-6 flex justify-between">
        <main>
            <div className="mb-6">
                <h1 className="text-5xl font-bold font-caveat tracking-wider mb-4">Sekretesspolicy</h1>
                <p className="text-neutral-400">Senast uppdaterad: nov 2025</p>
            </div>
            <p>Hej och välkommen! Kul att du kikar in. Den här sidan berättar kort hur jag hanterar information här på webbplatsen. Syftet med sidan är främst att visa mina projekt — inget mer avancerat än så.</p>

            <h3>Vilken information som samlas in</h3>
            <p>Det här är en enkel portföljsida utan inloggning, cookies eller spårning. Jag samlar inte in personlig data automatiskt, så du kan surfa lugnt.</p>

            <h4>1. Chatten</h4>
            <p>Om du använder chatboten kan vissa meddelanden sparas tillfälligt för att förbättra upplevelsen. Dela inte personlig eller känslig information i chatten.</p>

            <h4>2. Kontaktformulär och e-post</h4>
            <p>Om du kontaktar mig via formuläret eller e-post väljer du själv vad du vill dela. Informationen används enbart för att kunna svara dig — inget mer.</p>

            <h3>Hur informationen används</h3>
            <ul className="list-disc ml-4">
            <li>För att hålla sidan fungerande och uppdaterad</li>
            <li>För att kunna svara på meddelanden och feedback</li>
            <li>För att förbättra innehåll och funktioner vid behov</li>
            </ul>

            <h3>Delning av uppgifter</h3>
            <p>Jag delar eller säljer inte några personuppgifter. Om du råkat skicka något som du vill ta bort — hör av dig så löser vi det.</p>

            <h3>Säkerhet</h3>
            <p>Jag gör mitt bästa för att skydda den information du eventuellt delar, men inga system är helt säkra. Rimliga åtgärder vidtas för att hålla allt tryggt.</p>

            <h3>Uppdateringar</h3>
            <p class="note">Denna policy uppdaterades senast i november 2025. Om något ändras lägger jag in det här så att du alltid kan se den senaste versionen.</p>

            <h2>Kontakta mig</h2>
            <p>Har du frågor eller funderingar? Du kan alltid nå mig via <a href="/contact" className="text-blue-500 hover:underline">kontaktformuläret</a>. Jag svarar gärna!</p>
        </main>
    </div>
}