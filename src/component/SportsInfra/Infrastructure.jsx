import React, { useState } from 'react';
import './InfrastructureServices.css';

const InfrastructureServices = () => {
  const [activeTab, setActiveTab] = useState('Cricket_');

  const tabs = [
    { id: 'Cricket_', label: 'Cricket' },
    { id: 'Football', label: 'Football' },
    { id: 'Badminton', label: 'Badminton' },
    { id: 'Vollyball', label: 'Vollyball' },
    { id: 'Basketball', label: 'Basketball' },
    { id: 'Swimming', label: 'Swimming' },
    { id: 'Yoga', label: 'Yoga' },
    { id: 'Gym', label: 'Gym' }
  ];

  const imageUrls = {
    Cricket_: {
      desktop: 'https://media.hudle.in/venues/d967fa52-df12-4fce-bd9c-83e9999fbda4/photo/c2439081cba6efa30f0304264064d05bb947091d',
      mobile: 'https://media.hudle.in/venues/d967fa52-df12-4fce-bd9c-83e9999fbda4/photo/c2439081cba6efa30f0304264064d05bb947091d'
    },
    Football: {
      desktop: 'https://img.freepik.com/free-photo/long-shot-kids-running-field_23-2149270937.jpg?t=st=1746216036~exp=1746219636~hmac=46a3ec38a3795505a7926cc0875e7386bc12ea16644702aaf5e045a50461b3ba&w=2000',
      mobile: 'https://img.freepik.com/free-photo/long-shot-kids-running-field_23-2149270937.jpg?t=st=1746216036~exp=1746219636~hmac=46a3ec38a3795505a7926cc0875e7386bc12ea16644702aaf5e045a50461b3ba&w=2000'
    },
    Badminton: {
      desktop: 'https://img.freepik.com/free-photo/tennis-court-with-green-fence-trees_23-2151909690.jpg?t=st=1746215892~exp=1746219492~hmac=84639cc0338471c1874515c25a0048ff4cc5d480c9cbb44dc0ac8bdcdd45f953&w=2000',
      mobile: 'https://img.freepik.com/free-photo/tennis-court-with-green-fence-trees_23-2151909690.jpg?t=st=1746215892~exp=1746219492~hmac=84639cc0338471c1874515c25a0048ff4cc5d480c9cbb44dc0ac8bdcdd45f953&w=2000'
    },
    Vollyball: {
      desktop: 'https://img.freepik.com/free-photo/volleyball-players-having-match_23-2149492368.jpg?t=st=1746212841~exp=1746216441~hmac=a585781599eea8cc8ea9b26ce7688d16a8efc4ae54265e53c30ac2f7502606f8&w=2000',
      mobile: 'https://img.freepik.com/free-photo/volleyball-players-having-match_23-2149492368.jpg?t=st=1746212841~exp=1746216441~hmac=a585781599eea8cc8ea9b26ce7688d16a8efc4ae54265e53c30ac2f7502606f8&w=2000'
    },
    Basketball: {
      desktop: 'https://img.freepik.com/free-photo/black-man-doing-sports-playing-basketball-sunrise-jumping-silhouette_285396-1449.jpg?t=st=1746215620~exp=1746219220~hmac=81715bc5ade4760dcbf9ed9b26a2b8d6472b729e733e925b3893d15c78d99a66&w=2000',
      mobile: 'https://img.freepik.com/free-photo/black-man-doing-sports-playing-basketball-sunrise-jumping-silhouette_285396-1449.jpg?t=st=1746215620~exp=1746219220~hmac=81715bc5ade4760dcbf9ed9b26a2b8d6472b729e733e925b3893d15c78d99a66&w=2000'
    },
    Swimming: {
      desktop: 'https://img.freepik.com/free-photo/indoors-swimming-pool_1385-1393.jpg?t=st=1746212962~exp=1746216562~hmac=311865b2a278ac1751eae280f741d9f70d3a31164db6f6af1697e920d85bc97f&w=2000',
      mobile: 'https://img.freepik.com/free-photo/indoors-swimming-pool_1385-1393.jpg?t=st=1746212962~exp=1746216562~hmac=311865b2a278ac1751eae280f741d9f70d3a31164db6f6af1697e920d85bc97f&w=2000'
    },
    Yoga: {
      desktop: 'https://img.freepik.com/free-photo/vertical-shot-smiling-korean-woman-doing-tree-yoga-asana-stretching-rubber-mat-park_1258-198610.jpg?t=st=1746213147~exp=1746216747~hmac=f0296873075ad658a8caaf19a17078730634c6e21de48f9ea70220ed187f5f16&w=2000',
      mobile: 'https://img.freepik.com/free-photo/vertical-shot-smiling-korean-woman-doing-tree-yoga-asana-stretching-rubber-mat-park_1258-198610.jpg?t=st=1746213147~exp=1746216747~hmac=f0296873075ad658a8caaf19a17078730634c6e21de48f9ea70220ed187f5f16&w=2000'
    },
    Gym: {
      desktop: 'https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114223.jpg?t=st=1746213453~exp=1746217053~hmac=c4c3aea341c46c119a43f28e28f395151b1fe0fcbf893a31852b95595b97ef67&w=2000',
      mobile: 'https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114223.jpg?t=st=1746213453~exp=1746217053~hmac=c4c3aea341c46c119a43f28e28f395151b1fe0fcbf893a31852b95595b97ef67&w=2000'
    }
  };

  const tabContents = {
    Cricket_: {
      title: 'Cricket',
      description: 'From grassroots coaching to advanced tournaments, cricket requires high-quality pitches and supporting infrastructure. Ars Kreedashala delivers customized synthetic and natural turf solutions tailored for every level of the game.',
      flooring: ['Synthetic Turf', 'Natural Turf (Black Soil, Red Soil)', 'Clay Courts', 'PP Tiles Courts on a cemented base'],
      infrastructure: ['Pitch preparation and boundary fencing', 'Drainage and irrigation systems', 'Sight screens, scoreboards, and seating', 'Advanced lighting for day-night matches']
    },
    Football: {
      title: 'Football',
      description: 'Football fields require durable, safe, and high-performance surfaces. Ars Kreedashala provides world-class artificial turf and futsal arena solutions to meet the needs of schools, clubs, and professional facilities.',
      flooring: ['Artificial Turf Arenas', 'Indoor Wooden / PU futsal arenas'],
      infrastructure: ['Entrances, pathways, and fencing', 'SUDS (Sustainable Urban Drainage System) for effective water management', 'Branding areas, information boards, and spectator seating', 'Professional lighting for extended play']
    },
    Badminton: {
      title: 'Badminton',
      description: 'Ars Kreedashala offers indoor and outdoor badminton court solutions with professional-grade flooring systems designed for optimal grip, bounce, and athlete performance.',
      flooring: ['Synthetic PVC Flooring', 'Wooden Flooring', 'PP Tiles over cemented base'],
      infrastructure: ['Court markings, nets, and lighting systems', 'Spectator seating and access pathways']
    },
    Vollyball: {
      title: 'Vollyball',
      description: 'Ars Kreedashala develops robust volleyball courts with surfaces that support fast-paced play and long-term durability, suitable for both training and competitive environments.',
      flooring: ['Acrylic Courts', 'Synthetic Turf courts', 'Polyurethane courts (PU)'],
      infrastructure: ['Court markings and net systems', 'Fencing, pathways, and lighting']
    },
    Basketball: {
      title: 'Basketball',
      description: 'Designed for high-performance and player safety, Ars Kreedashala’s basketball courts meet the standards of schools, clubs, and public parks with durable surfaces and supporting infrastructure.',
      flooring: ['Acrylic Courts', 'Wooden Flooring (Indoor)', 'Polyurethane courts (PU)'],
      infrastructure: ['Professional hoop systems, fencing, and lighting', 'Spectator seating']
    },
    Swimming: {
      title: 'Swimming',
      description: 'Ars Kreedashala designs interactive and safe aquatic play areas and kids’ pools, fostering active lifestyles with safe, durable flooring and engaging equipment.',
      flooring: ['EPDM Rubber Flooring', 'Artificial Grass', 'PVC Flooring (Indoor)'],
      infrastructure: ['Play structures, swings, and slides', 'Safety fencing, seating, and access pathways']
    },
    Yoga: {
      title: 'Yoga',
      description: 'Ars Kreedashala builds serene and professional-grade yoga and wellness spaces, including outdoor decks and specialized indoor areas for group or solo practice.',
      flooring: ['Synthetic Rubber Tracks'],
      infrastructure: ['Drainage and marking systems', 'Lighting and seating arrangements']
    },
    Gym: {
      title: 'Gym',
      description: 'Ars Kreedashala constructs high-quality multi-purpose gym and fitness spaces with specialized flooring and infrastructure suited for both functional and strength training.',
      flooring: ['Artificial Turf', 'PU Flooring', 'Acrylic', 'PVC'],
      infrastructure: ['Flood lighting', 'Cushioning systems', 'PVP Fencing', 'Landscaping', 'Iron Columns', 'Drainage systems']
    }
  };
  


  return (
    <div className="infrastructure-services">
      <div className="header-section">
        <div className="container pb-0 pt-sm-5 pt-4 mb-4">
          <div className="header-content">
          <h2>Create world-class sports spaces that deliver value from day one!</h2>
<p>
  With over 75 thousand square feet transformed across India, Ars Kreedashala is a leading provider of sports infrastructure solutions, driving grassroots sports through high-quality, innovative facilities. Our full-service Build, Operate, Monetize model enables educational institutions and communities to create world-class sports spaces that deliver immediate value. We offer a one-stop solution for all sports infrastructure needs, ensuring quality, cost-effectiveness, and ongoing support to maximize return on investment and enhance the sports experience.
</p>

          </div>
        </div>
      </div>

      <div className="banner-section">
        <div className="banner-image-1 desktop">
          <img src="./infras.jpg" alt="Sports Infrastructure" />
        </div>
        {/* <div className="banner-image mobile">
          <img src="https://img.freepik.com/free-photo/view-empty-football-stadium_23-2151569871.jpg?t=st=1746217403~exp=1746221003~hmac=723911ef746be043caad7a2b841824505f1855ec4ffb355363cba426919c34aa&w=2000" alt="Sports Infrastructure" />
        </div> */}
      </div>

      <section className="tab-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 col-12"></div>
            <div className="col-lg-9 col-md-12 col-sm-12 col-12">
              <h3 className="section-heading">Infrastructure services</h3>
            </div>
          </div>
          <div className="row tab-layout">
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="tab-navigation">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="tab-content">
                {activeTab && (
                  <div className="tab-pane active">
                    {imageUrls[activeTab] && (
                      <picture>
                        <source media="(min-width:768px)" srcSet={imageUrls[activeTab].desktop} />
                        <img src={imageUrls[activeTab].mobile} alt={tabContents[activeTab].title} />
                      </picture>
                    )}
                    <div className="content-details">
                      <h3>{tabContents[activeTab].title}</h3>
                      <p>{tabContents[activeTab].description}</p>

                      {tabContents[activeTab].flooring && (
                        <>
                          <h5>Available Flooring Solutions:</h5>
                          <ul>
                            {tabContents[activeTab].flooring.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {tabContents[activeTab].infrastructure && (
                        <>
                          <h5>Supporting Infrastructure:</h5>
                          <ul>
                            {tabContents[activeTab].infrastructure.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {tabContents[activeTab].solutions && (
                        <>
                          <h4>Solutions Offered:</h4>
                          <ul>
                            {tabContents[activeTab].solutions.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructureServices;
