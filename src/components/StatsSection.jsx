import { FaGlobeAmericas, FaShip, FaUsers, FaBuilding } from 'react-icons/fa';

const StatCard = ({ icon, number, label, index }) => {
  return (
    <div style={{ 
      textAlign: 'center',
      animation: `fadeInUp ${0.5 + index * 0.2}s ease-out`
    }}>
      <div style={{ 
        color: '#3b82f6', 
        fontSize: '2.25rem', 
        marginBottom: '1rem', 
        display: 'flex', 
        justifyContent: 'center',
        animation: 'pulse 2s infinite ease-in-out'
      }}>{icon}</div>
      <div style={{ 
        fontSize: '1.875rem', 
        fontWeight: 'bold', 
        marginBottom: '0.5rem',
        className: 'number-animate'
      }}>{number}</div>
      <div style={{ color: '#4b5563' }}>{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <FaGlobeAmericas />,
      number: "50+",
      label: "Countries Served"
    },
    {
      icon: <FaShip />,
      number: "10,000+",
      label: "Shipments Annually"
    },
    {
      icon: <FaUsers />,
      number: "500+",
      label: "Satisfied Clients"
    },
    {
      icon: <FaBuilding />,
      number: "15+",
      label: "Global Offices"
    }
  ];

  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem'
        }} className="md-grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
