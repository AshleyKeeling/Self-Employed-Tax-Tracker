import { Container } from "react-bootstrap"
import { useState, useRef, useEffect } from "react";


import uploadIcon from '../assets/upload-icon.png';
import downloadIcon from '../assets/download-icon.png';
import AddNewData from "../components/AddNewData";
import Breakdown from "../components/Breakdown";
import Infographics from "../components/Infographics";
import RecentActivity from "../components/RecentActivity";
import Documents from "../components/Documents";

const Dashboard = () => {

    const items = [
        { title: "Next Payment Due", value: "21 Jan 2026" },
        { title: "Estimated Tax Payment", value: "£512.06" },
        { title: "Income After Deductions", value: "£4,125" },
        { title: "Tax Allowance Remaining", value: "£4,125 / £12,570" },
    ];

    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const container = scrollRef.current;
        const handleScroll = () => {
            const index = Math.round(container.scrollLeft / container.clientWidth);
            setActiveIndex(index);
        };
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <Container>
            <h1 className="display-1 fw-bold mt-5">Welcome Ashley</h1>

            <section
                ref={scrollRef}
                className="d-flex d-lg-none gap-3 overflow-auto py-1 snap-x scroll-smooth"
                style={{ scrollSnapType: "x mandatory" }}
            >
                {items.map((k, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0"
                        style={{ minWidth: "80%", scrollSnapAlign: "center" }}
                    >
                        <div className="primary-bg text-white rounded-3 p-3 text-center shadow-sm">
                            <div className="fw-semibold mb-1 opacity-90">{k.title}</div>
                            <div className="fw-bold fs-4">{k.value}</div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Dots indicator (mobile only) */}
            <div className="d-flex d-lg-none justify-content-center mt-2">
                {items.map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            margin: "0 4px",
                            backgroundColor: i === activeIndex ? "#0d6efd" : "#c0c0c0",
                            transition: "background-color 0.3s",
                        }}
                    />
                ))}
            </div>

            {/* Desktop grid */}
            <section className="row row-cols-2 row-cols-lg-4 g-3 d-none d-lg-flex">
                {items.map((k, i) => (
                    <div className="col" key={i}>
                        <div className="primary-bg text-white rounded-3 p-3 h-100 text-center shadow-sm">
                            <div className="fw-semibold mb-1 opacity-90">{k.title}</div>
                            <div className="fw-bold fs-4">{k.value}</div>
                        </div>
                    </div>
                ))}
            </section>


            <div className="row my-5">
                <div className="col-12 col-md-3 ">

                    {/* add data section */}
                    <AddNewData />

                    {/* Breakdown section */}
                    <Breakdown />
                </div>


                <div className="col-12 col-md-9">
                    {/*  Infographics */}
                    <Infographics />


                    {/* Recent Activity */}
                    <RecentActivity />

                    {/* Documents */}
                    <Documents />
                </div>
            </div>
        </Container >
    )
}

export default Dashboard;