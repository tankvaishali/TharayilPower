import { CircleChevronRight } from 'lucide-react';
import React from 'react';
import { Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';

function CaseStudy() {

    const departments = [
        {
            id: "tabs-tab-1",
           tittle:'Mr.Chandran',
            image: require("../../Assets/Images/residential_casestudy_image.jpeg"),
            description: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
            details: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint...",
            casestudyname: 'Residential',
            Client: 'Mr.Chandran',
            locate: "Thiruvananthapuram, Kerala",
            casestudytitle: 'Residential Solar System in Thiruvananthapuram',
            challenge: "Mr.Chandran's home in Thiruvananthapuram had consistently high electricity bills due to the heavy use of air conditioning and multiple high-power appliances. With rising electricity costs, he needed a solution to reduce his energy consumption and control expenses.",
            solution: "Tharayil Power designed and implemented a custom solar panel system tailored to Mr.Chandran's energy consumption patterns. In addition, we installed an energy-efficient battery storage system to maximize energy savings and ensure power availability throughout the day. The solar panels were strategically placed to optimize energy generation during peak sunlight hours and minimize reliance on grid power.",
            results: [
                "Reduced annual energy costs by 35%, saving Mr.Chandran an estimated INR 25,000 per year.",
                "Achieved self-sufficiency in energy supply, eliminating dependency on the grid during daytime hours.",
                "Reduced the home’s carbon footprint by an amount equivalent to planting 150 trees.",
            ],
            takeaway: "Tharayil Power's residential solar solution offers significant cost savings for homeowners while contributing to a cleaner environment. With customized systems, energy efficiency is maximized, reducing both utility costs and environmental impact.",
        },
        {
            id: "tabs-tab-2",
           
            image: require("../../Assets/Images/com_casestudy_image.jpeg"),
tittle:"LIC",
            description:
                "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
            details:
                "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal",
            casestudyname: 'Commercial',
            Client: 'Life Insurance Corporation Of India (LIC)',
            locate: "Chennai , Alappuzha , Cherthala, Kaloor , Aluva , Muvattupuzham",
            casestudytitle: 'Commercial Rooftop Installation',
            challenge: "LIC, faced high operational costs due to its heavy reliance on grid electricity. The company lacked control over its energy usage during production hours, impacting both costs and overall energy efficiency.",
            solution: "Tharayil Power provided a custom-designed rooftop solar system that matched LIC’s energy needs. This solar solution included advanced monitoring tools, enabling the company to track energy usage in real-time and adjust accordingly, optimizing both consumption and cost savings.",
            results: [
                "Increased operational efficiency by reducing energy waste by over 20%.",
                "Realized a 30% reduction in monthly electricity bills, helping to lower overall operational costs.",
                "Enhanced sustainability profile, aligning the business with eco-conscious practices and attracting environmentally-aware customers.",
            ],
            takeaway: "Tharayil Power’s commercial solar solutions help small businesses, like LIC, significantly reduce energy bills while enhancing operational efficiency. This contributes to long-term savings and supports a sustainable, eco-friendly business approach.",
        },
        {
            id: "tabs-tab-3",
           tittle:"Govt. H S School",
            image: require("../../Assets/Images/institu_casestudy_image.jpeg"),
            description:
                "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut",
            details:
                "Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae",
            casestudyname: 'Institutional',
            Client: 'Govt. H S School Muthuvallur ',
            locate: "Malappuram",
            casestudytitle: 'Institutional Solar Project in Kerala',
            challenge: "Govt. H S School in Malappuram was facing escalating electricity costs. In addition, the school wanted to embrace renewable energy to align with its sustainability goals and educate students on the benefits of clean energy.",
            solution: "Tharayil Power delivered a large-scale solar energy system designed specifically for Govt. H S School’s campus, including solar panels on rooftops and open spaces. The installation helped reduce the school’s dependence on grid power, while also integrating renewable energy education into the school’s curriculum to inspire students towards eco-conscious practices.",
            results: [
                "Achieved 40% savings in electricity costs, bringing the school closer to energy self-sufficiency.",
                "Incorporated renewable energy education, promoting sustainability as part of the learning experience.",
                "Established a benchmark for other educational institutions aiming to implement solar energy solutions.",
            ],
            takeaway: " Tharayil Power’s institutional solar systems offer schools like Govt. H S School a path to energy independence, significant cost savings, and an opportunity to teach the next generation about sustainability and renewable energy practices.",
        }
    ];

    return (
        <>

            <Container className="my-5 tab2 ">
                <div className="text-center mb-4">
                    <div className="font_stroke">
                        CaseStudy Reports
                    </div>
                    <div className="ftittle">
                        Insights and Success Stories in Solar Solutions
                    </div>
                </div>
                <Tabs defaultActiveKey="tabs-tab-1" id="case-study-tabs" className="mb-3 justify-content-center tab1 fw-medium border-bottom-0">
                    {departments.map((dept) => (
                        <Tab eventKey={dept.id} title={`${dept.casestudyname} Case Study`} key={dept.id}>
                            <Row>
                                <Col lg={6} className="p-3">
                                    <div className="py-3 ">
                                        <div className="font_stroke">
                                            {dept.tittle}
                                        </div>
                                        <div className="ftittle">
                                            {dept.casestudytitle}
                                        </div>
                                    </div>
                                    <p><strong>Client:</strong> {dept.Client}</p>
                                    <p><strong>Location:</strong> {dept.locate}</p>
                                    <Tabs
                                        defaultActiveKey="challenge"
                                        id="section-tabs"
                                        className="mb-3  fw-medium border-bottom-0 tab1"
                                    >
                                        <Tab eventKey="challenge" title="Challenge">
                                            <Card className="shadow pera">
                                                <Card.Body><CircleChevronRight className='me-2 ' strokeWidth={1.75} /> {dept.challenge}</Card.Body>
                                            </Card>
                                        </Tab>
                                        <Tab eventKey="solution" title="Solution">
                                            <Card className="shadow pera">
                                                <Card.Body><CircleChevronRight className='me-2' strokeWidth={1.75} /> {dept.solution}</Card.Body>
                                            </Card>
                                        </Tab>
                                        <Tab eventKey="results" title="Results">
                                            <Card className="shadow pera">
                                                <Card.Body>
                                                    <ul className="list-unstyled">
                                                        {dept.results.map((result, index) => (
                                                            <li key={index} className="mb-2">
                                                                <CircleChevronRight className='me-2' strokeWidth={1.75} />
                                                                {result}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </Card.Body>
                                            </Card>
                                        </Tab>
                                        <Tab eventKey="takeaway" title="Takeaway">
                                            <Card className="shadow pera">
                                                <Card.Body><CircleChevronRight className='me-2' strokeWidth={1.75} /> {dept.takeaway}</Card.Body>
                                            </Card>
                                        </Tab>
                                    </Tabs>
                                </Col>
                                <Col lg={6} className="p-3">
                                    <img
                                        src={dept.image}
                                        alt={dept.title}
                                        className="img-fluid h-100 object-fit-cover shadow-lg imageoffsetline"
                                    />
                                </Col>
                            </Row>
                        </Tab>
                    ))}
                </Tabs>
            </Container>

        </>
    );
}


export default CaseStudy