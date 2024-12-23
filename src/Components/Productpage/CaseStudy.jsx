import { CircleChevronRight } from 'lucide-react';
import React from 'react';
import { Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';

function CaseStudy() {

    const departments = [
        {
            id: "tabs-tab-1",
            title: "Solar water heater",
            image: require("../../Assets/Images/highlits2.jpg"),
            description: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
            details: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint...",
            casestudyname: 'Residential',
            Client: 'Mr.Ravi M., Owner',
            locate: "Ernakulam, Kerala",
            casestudytitle: 'Residential Solar System in Ernakulam',
            challenge: " Mr. Ravi's home in Ernakulam had consistently high electricity bills due to the heavy use of air conditioning and multiple high-power appliances. With rising electricity costs, he needed a solution to reduce his energy consumption and control expenses.",
            solution: "Tharayil Power designed and implemented a custom solar panel system tailored to Mr. Ravi’s energy consumption patterns. In addition, we installed an energy-efficient battery storage system to maximize energy savings and ensure power availability throughout the day. The solar panels were strategically placed to optimize energy generation during peak sunlight hours and minimize reliance on grid power.",
            results: [
                "Reduced annual energy costs by 35%, saving Mr. Ravi an estimated INR 25,000 per year.",
                "Achieved self-sufficiency in energy supply, eliminating dependency on the grid during daytime hours.",
                "Reduced the home’s carbon footprint by an amount equivalent to planting 150 trees.",
            ],
            takeaway: "Tharayil Power's residential solar solution offers significant cost savings for homeowners while contributing to a cleaner environment. With customized systems, energy efficiency is maximized, reducing both utility costs and environmental impact.",
        },
        {
            id: "tabs-tab-2",
            title: "BLDC fan",
            image: require("../../Assets/Images/contactimage.jpg"),

            description:
                "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
            details:
                "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal",
            casestudyname: 'Commercial',
            Client: 'Megha Textiles',
            locate: "Kochi, Kerala",
            casestudytitle: 'Commercial Rooftop Installation for Small Businesses',
            challenge: "Megha Textiles, a growing business in Kochi, faced high operational costs due to its heavy reliance on grid electricity. The company lacked control over its energy usage during production hours, impacting both costs and overall energy efficiency.",
            solution: "Tharayil Power provided a custom-designed rooftop solar system that matched Megha Textiles’ energy needs. This solar solution included advanced monitoring tools, enabling the company to track energy usage in real-time and adjust accordingly, optimizing both consumption and cost savings.",
            results: [
                "Increased operational efficiency by reducing energy waste by over 20%.",
                "Realized a 30% reduction in monthly electricity bills, helping to lower overall operational costs.",
                "Enhanced sustainability profile, aligning the business with eco-conscious practices and attracting environmentally-aware customers.",
            ],
            takeaway: "Tharayil Power’s commercial solar solutions help small businesses, like Megha Textiles, significantly reduce energy bills while enhancing operational efficiency. This contributes to long-term savings and supports a sustainable, eco-friendly business approach.",
        },
        {
            id: "tabs-tab-3",
            title: "Solar Street Lights",
            image: require("../../Assets/Images/residential.jpg"),
            description:
                "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut",
            details:
                "Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae",
            casestudyname: 'Institutional',
            Client: 'Green Valley School',
            locate: "Ernakulam, Kerala",
            casestudytitle: 'Institutional Solar Project in Kerala',
            challenge: "Green Valley School in Thrissur was facing escalating electricity costs. In addition, the school wanted to embrace renewable energy to align with its sustainability goals and educate students on the benefits of clean energy.",
            solution: "Tharayil Power delivered a large-scale solar energy system designed specifically for Green Valley School’s campus, including solar panels on rooftops and open spaces. The installation helped reduce the school’s dependence on grid power, while also integrating renewable energy education into the school’s curriculum to inspire students towards eco-conscious practices.",
            results: [
                "Achieved 40% savings in electricity costs, bringing the school closer to energy self-sufficiency.",
                "Incorporated renewable energy education, promoting sustainability as part of the learning experience.",
                "Established a benchmark for other educational institutions aiming to implement solar energy solutions.",
            ],
            takeaway: " Tharayil Power’s institutional solar systems offer schools like Green Valley a path to energy independence, significant cost savings, and an opportunity to teach the next generation about sustainability and renewable energy practices.",
        }
    ];

    return (
        <>

            <Container className="my-5 tab2">
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
                                            {dept.Client}
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
            {/* <div className=' casestudyimg' >
                <section
                    id="departments"
                    className="tabs section overflow-hidden">

                    <div className="container">
                        <div className="col-lg-12 mt-4 p-lg-5" >
                            <div className="">
                                <div
                                    className="nav-tabs flex-column justify-content-between h-100">
                                    <div className="row justify-content-center">
                                        {departments.map((department) => (
                                            <>
                                                <div className="mx-2 mt-2 col-sm-3 px-sm-0 px-5" key={department.id} >
                                                    <a
                                                        className={`nav-link bg_tab text-center text-uppercase ${activeTab === department.id ? "active show" : ""
                                                            }`}
                                                        onClick={() => setActiveTab(department.id)}
                                                    >
                                                        {department.casestudyname}
                                                    </a>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {departments
                                .filter((department) => department.id === activeTab)
                                .map((department) => (

                                    <div className="tab-pane active show p-4" id={department.id} key={department.id}>
                                        <div className="py-3 ">
                                            <div className="font_stroke" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                                                {department.casestudyname}
                                            </div>
                                            <div className="ftittle" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
                                                {department.casestudytitle}
                                            </div>
                                        </div>
                                        <div className='row p-3 my-3'>
                                            <div className="mb-3 col-sm-3 border-4 border-start border-success" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                                                <h5 className="fw-bold text-dark mb-1"><BsPerson /> Client:</h5>
                                                <p className="text-muted">{department.Client}</p>
                                            </div>

                                            <div className="mb-3 col-sm-4 border-4 border-start border-success ps-4" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                                                <h5 className="fw-bold text-dark mb-1"><CiLocationOn /> Location:</h5>
                                                <p className="text-muted">{department.locate}</p>
                                            </div>
                                        </div>

                                        <div className="mb-3 border-4 border-start border-end text-center border-success shadow_green p-4 my-4 bg-light" data-aos='fade-right' data-aos-duration="1800" data-aos-once="true">                                            <h5 className="fw-bold text-dark mb-1">Challenge:</h5>
                                            <p className="text-muted">{department.challenge}</p>
                                        </div>

                                        <div className="mb-3 border-4 border-start border-end text-center border-success shadow_green p-4 my-4 bg-light" data-aos='fade-left' data-aos-duration="1800" data-aos-once="true">                                            <h5 className="fw-bold text-dark mb-1">Solution:</h5>
                                            <p className="text-muted">{department.solution}</p>
                                        </div>

                                        <div className="mb-3 border-4 border-start border-end text-center border-success shadow_green p-4 my-4 bg-light" data-aos='fade-right' data-aos-duration="1800" data-aos-once="true">                                            <h5 className="fw-bold text-dark mb-1">Results:</h5>
                                            <ul className="list-unstyled text-muted">
                                                {department.results.map((result, index) => (
                                                    <li key={index} style={{ marginBottom: "5px" }}>
                                                        • {result}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-3  border-4 border-start border-end text-center border-success shadow_green p-4 my-4 bg-light" data-aos='fade-left' data-aos-duration="1800" data-aos-once="true">                                            <h5 className="fw-bold text-dark mb-1">Key Takeaway:</h5>
                                            <p className="text-muted">{department.takeaway}</p>
                                        </div>
                                    </div>

                                ))}
                        </div>
                    </div>
                </section>
            </div> */}
        </>
    );
}


export default CaseStudy