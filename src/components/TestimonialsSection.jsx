import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialCard = ({ name, company, quote, rating }) => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '1.5rem', 
      borderRadius: '0.5rem', 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      border: '1px solid #e5e7eb'
    }}>
      <div style={{ marginBottom: '1rem', color: '#eab308', display: 'flex' }}>
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} style={{ marginRight: '0.25rem' }} />
        ))}
      </div>
      <div style={{ color: '#1f2937', marginBottom: '1.5rem', position: 'relative' }}>
        <FaQuoteLeft style={{ 
          color: '#dbeafe', 
          fontSize: '2rem', 
          position: 'absolute', 
          left: '-0.5rem', 
          top: '-0.5rem' 
        }} />
        <p style={{ 
          position: 'relative', 
          zIndex: 10, 
          fontStyle: 'italic',
          paddingLeft: '0.5rem'
        }}>{quote}</p>
      </div>
      <div>
        <p style={{ fontWeight: 'bold' }}>{name}</p>
        <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>{company}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Global Exports Ltd.",
      quote: "TNS Cargo has been our trusted logistics partner for over 5 years. Their reliability and professionalism have helped us expand our business internationally with confidence.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Innovative Tech Solutions",
      quote: "Our time-sensitive shipments are always delivered on schedule with TNS Cargo. Their tracking system keeps us updated every step of the way.",
      rating: 5
    },
    {
      name: "Anil Mehta",
      company: "Mehta Pharmaceuticals",
      quote: "Handling temperature-sensitive medical supplies requires extreme care, and TNS Cargo has consistently delivered exceptional service for our international shipments.",
      rating: 4
    }
  ];

  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#f3f4f6' }}>
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>What Our Clients Say</h2>
          <p style={{ color: '#4b5563', maxWidth: '42rem', margin: '0 auto' }}>
            We take pride in providing excellent service to our clients. Here's what they have to say about working with TNS Cargo India Services.
          </p>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem'
        }} className="md-grid-cols-2 lg-grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              company={testimonial.company}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
