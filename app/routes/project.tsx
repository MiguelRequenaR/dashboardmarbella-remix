import CardProject from "~/components/card/cardProject"
import AppLayout from "./layout/appLayout"
import TaskCard from "~/components/card/taskCard"
import CaseCard from "~/components/card/caseCard"
import HeaderProject from "~/components/headerProject"


function Project() {
  return (
    <AppLayout>
        <div className='pt-5 pl-5'>
              <h2 className='text-4xl font-bold text-[#363949]'>Proyectos</h2>
              <HeaderProject />
        </div>
        <div className="text-black grid grid-cols-4 mt-5 m-6 gap-4">
            <div>
                <h2 className="text-2xl font-semibold">Para Hacer</h2>
                <CardProject />
                <CaseCard />
                <TaskCard />
            </div>
            <div>
                <h2 className="text-2xl font-semibold">En progreso</h2>
                <TaskCard />
                <CaseCard />
            </div>
            <div>
                <h2 className="text-2xl font-semibold">Por revisar</h2>
                <CaseCard />
                <CardProject />
            </div>
            <div>
                <h2 className="text-2xl font-semibold">Listo</h2>
                <CardProject />
            </div>
        </div>
    </AppLayout>
  )
}

export default Project