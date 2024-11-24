
import { Button, Image } from "react-bootstrap";
import "../../../assets/projects/projectsPages/TransactionFlowProjectPage.css";
import transactionFlowProject from '../../../assets/images/projects/transactionFlowProject.webp'


const project = {
    projectName: 'Flujo transaccional',
    imageFile: transactionFlowProject,
    tags: ['Typescript', 'AWS', 'Python'],
    projectPage: 'transactionFlow'
}



function transactionFlowProjectPage() {
    return (
        <div className="sectionsContainers">
            <div className="transactionFlowProjectPageHeader">
                <div className="headerTags">
                    {
                        project.tags.map((tag, index) => {
                            if (index === project.tags.length - 1) {
                                return (
                                    <div>
                                        {tag.toUpperCase()}
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div className="withPointsContainer">
                                        {tag.toUpperCase()}
                                        <div className="headerPoints">
                                        </div>
                                    </div>

                                )
                            }

                        })
                    }
                </div>
                <div className="headerTitle">
                    {project.projectName}
                </div>
                <div className="transactionFlowProjectLinks">
                    <Button variant="white" href="https://payscan.cl/" target="_blank" className="projectLink">
                        Visitar página
                    </Button>
                </div>
            </div>

            <div className="transactionFlowProjectImageContainer">
                <Image className="transactionFlowProjectImage" src={project.imageFile} rounded>

                </Image>
            </div>

            <div className="transactionFlowProjectOverviewAndChapters">
                <div className="transactionFlowProjectOverview">
                    <div className="transactionFlowProjectOverviewTitle">
                        Resumen del proyecto
                    </div>
                    <div className="transactionFlowProjectOverviewText">
                        Solución para poder transaccionar con un dispositivo IM20 de la empresa Payscan. Se utilizó
                        herramientas de AWS serverless para poder llevar a cabo el proyecto.
                        La solución incluye desde que el usuario pone su tarjeta para comenzar la compra hasta la vista del comercio para poder analizar y
                        visualizar el comportamiento de sus ventas a través del mes (backoffice).
                    </div>

                </div>
                <div className="transactionFlowProjectChapters">
                    <div className="transactionFlowProjectChaptersTitle">
                        Secciones
                    </div>
                    <div className="transactionFlowProjectChaptersText">
                        <div>
                            Motivación •
                        </div>
                        <div>
                            Proyecto •
                        </div>
                        <div>
                            Resultados •
                        </div>
                    </div>
                </div>
            </div>

            <div className="transactionFlowProjectObjective">
                <div className="transactionFlowProjectObjectiveTitle">
                    Motivación
                </div>
                <div className="transactionFlowProjectObjectiveText">
                    La motivación detrás de un proyecto como este radica en la necesidad de ofrecer una solución que
                    facilite y optimice el proceso de transacciones de pago en un entorno comercial.
                    Al integrar el dispositivo IM20 de Payscan, se busca proporcionar una manera eficiente y
                    segura para que los comerciantes puedan aceptar pagos de tarjetas de manera ágil, mejorando
                    la experiencia tanto para el consumidor como para el vendedor. Esta solución elimina fricciones
                    en el proceso de compra y asegura que las transacciones se realicen de manera confiable,
                    lo que resulta en una mayor satisfacción del cliente.<br /><br />
                    Además, al utilizar herramientas serverless de AWS, el proyecto está diseñado para ser flexible
                    y escalable, lo que permite que el sistema se adapte fácilmente a la demanda, sin requerir una
                    infraestructura física compleja. Esto no solo reduce los costos operativos, sino que también
                    asegura tiempos de respuesta rápidos, lo que es crucial para el buen funcionamiento de cualquier
                    sistema de pagos. La arquitectura serverless permite también que los comerciantes se concentren
                    más en su negocio y menos en la gestión de servidores y recursos tecnológicos. <br /><br />

                    Otro aspecto clave del proyecto es la incorporación de un sistema de análisis de ventas para
                    los comerciantes. A través de un backoffice intuitivo, los vendedores pueden obtener una visión
                    detallada del comportamiento de sus ventas durante el mes. Esto les permite tomar decisiones
                    informadas sobre precios, promociones y gestión de inventarios, optimizando la rentabilidad
                    de su negocio. Con herramientas que permiten monitorear el desempeño en tiempo real, los
                    comerciantes pueden ajustar sus estrategias rápidamente y de manera efectiva.
                </div>
            </div>


            <div className="transactionFlowProjectObjective">
                <div className="transactionFlowProjectObjectiveTitle">
                    Proyecto
                </div>
                <div className="transactionFlowProjectObjectiveText">
                    El proyecto evolucionó a lo largo de su desarrollo, adaptándose a nuevas prioridades y necesidades.
                    La solución se construyó sobre tres pilares fundamentales: el backoffice, el backend y el desarrollo
                    en el dispositivo IM20.<br /><br />


                    El backoffice se diseñó principalmente para ofrecer a los comerciantes herramientas analíticas que
                    les permitan tomar decisiones informadas sobre sus ventas. Sin embargo, su funcionalidad va más
                    allá de la visualización de datos, ya que también permite realizar diversas acciones administrativas,
                    como dar de baja dispositivos, reversar transacciones, actualizar configuraciones, y gestionar la
                    creación de comercios, sucursales, dispositivos y usuarios. Esta aplicación web fue desarrollada
                    utilizando Angular y TypeScript, lo que asegura una interfaz dinámica y eficiente para los usuarios.<br /><br />

                    El backend, por su parte, actúa como el intermediario entre el dispositivo IM20, el backoffice y
                    Geopagos (la pasarela de pagos que facilita el uso de diversos tipos de tarjetas bancarias).
                    Para implementar este flujo de comunicación, se recurrió a una arquitectura serverless de AWS,
                    utilizando herramientas como Lambda, API Gateway, DynamoDB y S3. Esto permitió crear un sistema
                    escalable y de alto rendimiento, capaz de gestionar la integración de múltiples componentes de
                    manera ágil y flexible.<br /><br />

                    Por último, el desarrollo en el dispositivo IM20 se realizó en C, para garantizar la correcta
                    operación de las transacciones a través de este dispositivo. Se desarrollaron nuevas vistas para
                    el flujo de transacciones, adaptadas a las necesidades específicas de la empresa Payscan,
                    optimizando la interacción del usuario con el terminal y asegurando un proceso de pago fluido y seguro. <br /><br />

                    En conjunto, estos tres pilares permiten una solución integral que abarca desde la transacción en el dispositivo
                    hasta el análisis y gestión de las ventas por parte de los comerciantes, mejorando la eficiencia y
                    la experiencia tanto para los usuarios como para los administradores del sistema.

                </div>
            </div>

            <div className="transactionFlowProjectObjective">
                <div className="transactionFlowProjectObjectiveTitle">
                    Resultados
                </div>
                <div className="transactionFlowProjectObjectiveText">

                    Se logró una mejora significativa en la eficiencia de las
                    transacciones y la experiencia del cliente. Gracias a la integración del dispositivo IM20 de Payscan
                    y la pasarela de pagos Geopagos, los comerciantes pueden procesar pagos de manera rápida y segura,
                    reduciendo los tiempos de espera y optimizando el flujo de compra. Además, el sistema backend serverless
                    asegura una operación escalable y flexible, adaptándose a picos de demanda sin necesidad de infraestructura
                    adicional, lo que optimiza los costos operativos.
                    <br /><br />

                    El backoffice, por su parte, brinda a los comerciantes un control completo sobre sus operaciones,
                    permitiéndoles visualizar y analizar ventas, gestionar dispositivos, y realizar tareas administrativas como
                    reversar transacciones o actualizar configuraciones. Esto facilita la toma de decisiones informadas sobre
                    precios, promociones e inventarios, mientras que la automatización de procesos reduce la intervención manual
                    y los errores humanos. En conjunto, la herramienta proporciona un sistema integral que no solo mejora la
                    gestión de pagos, sino que también ofrece valiosas capacidades de análisis y gestión para optimizar la
                    rentabilidad y eficiencia operativa del comercio.

                </div>
            </div>



            <div className="videoContainer">
                {/* <video className="video" src={transactionFlowProjectVideo} autoPlay muted loop>

                    </video> */}
            </div>

        </div>
    )
}

export default transactionFlowProjectPage