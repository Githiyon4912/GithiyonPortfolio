import {
  Document, Page, Text, View, StyleSheet, Link
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingVertical: 40,
    paddingHorizontal: 50,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#222",
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  role: {
    fontSize: 10,
    letterSpacing: 1.5,
    color: "#555",
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginBottom: 2,
    fontSize: 9,
    color: "#444",
  },
  contactItem: {
    marginRight: 8,
    color: "#444",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 2,
    color: "#333",
    marginBottom: 6,
    marginTop: 10,
  },
  summaryText: {
    fontSize: 10,
    color: "#333",
    lineHeight: 1.6,
  },
  jobTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginBottom: 1,
  },
  jobRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  jobMeta: {
    fontSize: 9,
    color: "#555",
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 4,
    paddingLeft: 8,
  },
  bulletDot: {
    marginRight: 5,
    fontSize: 10,
  },
  bulletText: {
    fontSize: 10,
    color: "#333",
    lineHeight: 1.5,
    flex: 1,
  },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 4,
  },
  skillBadge: {
    border: "1pt solid #bbb",
    borderRadius: 3,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 9,
    color: "#333",
  },
  link: {
    fontSize: 9,
    color: "#444",
    textDecoration: "none",
    marginBottom: 3,
  },
});

function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <Text style={styles.name}>Githiyon M</Text>
        <Text style={styles.role}>FRONTEND DEVELOPER</Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>githiyonm4912@gmail.com  ·</Text>
          <Text style={styles.contactItem}>+91 9003255653  ·</Text>
          <Text style={styles.contactItem}>chennai, india  ·</Text>
          <Link src="https://githiyonm.netlify.app/" style={styles.contactItem}>
            https://githiyonm.netlify.app/  ·
          </Link>
        </View>
        <View style={styles.contactRow}>
          <Link src="https://linkedin.com/in/githiyon-m" style={styles.contactItem}>
            linkedin.com/in/githiyon-m
          </Link>
        </View>

        <View style={styles.divider} />

        {/* Summary */}
        <Text style={styles.sectionTitle}>SUMMARY</Text>
        <View style={styles.divider} />
        <Text style={styles.summaryText}>
          Full Stack Developer with 10 months of professional front-end development experience in a startup
          environment, specialized in building dynamic, user-centric web applications.
        </Text>

        {/* Experience */}
        <Text style={styles.sectionTitle}>EXPERIENCE</Text>
        <View style={styles.divider} />
        <View style={styles.jobRow}>
          <Text style={styles.jobTitle}>Frontend Developer</Text>
          <Text style={styles.jobMeta}>Dec 2024 — Oct 2025</Text>
        </View>
        <Text style={styles.jobMeta}>Digital Pebbles · Pozhichalur, Chennai</Text>
        <View style={{ marginTop: 5 }}>
          <View style={styles.bullet}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletText}>
              Developed a fully responsive product catalog website for a hardware products company using
              React.js and Tailwind CSS, with a mobile-first design, reusable components, and seamless user
              experience across all devices.
            </Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletText}>
              Implemented dynamic routing, state management, and component-driven architecture for
              product listings, filtering, and detailed product views, ensuring smooth navigation and
              maintainable code efficiency.
            </Text>
          </View>
        </View>

        {/* Education */}
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        <View style={styles.divider} />
        <View style={styles.jobRow}>
          <Text style={styles.jobTitle}>BCA Bachelor of Computer Applications</Text>
          <Text style={styles.jobMeta}>2018 — 2021</Text>
        </View>
        <Text style={styles.jobMeta}>Tagore College Of Arts & Science · Chrompet, Chennai</Text>

        {/* Skills */}
        <Text style={styles.sectionTitle}>SKILLS</Text>
        <View style={styles.divider} />
        <View style={styles.skillsRow}>
          {["Html5", "Css3", "JavaScript", "React", "Tailwind CSS", "Redux", "Node.js", "MongoDb"].map(
            (skill) => (
              <Text key={skill} style={styles.skillBadge}>{skill}</Text>
            )
          )}
        </View>

        {/* Projects */}
        <Text style={styles.sectionTitle}>PROJECTS</Text>
        <View style={styles.divider} />
        <Text style={styles.jobTitle}>Invoice Builder</Text>
        <Link src="https://github.com/GITHIYON49/InvoiceGeneratorProject" style={styles.link}>
          https://github.com/GITHIYON49/InvoiceGeneratorProject
        </Link>
        <View style={{ marginTop: 4 }}>
          <View style={styles.bullet}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletText}>
              Built a fully responsive Invoice Builder using React.js and Tailwind CSS, featuring real-time
              subtotal, tax, and total calculations with a clean, professional UI and client-side PDF generation
              using react-pdf-renderer and react-pdf-table.
            </Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletText}>
              Managed complex application state using Redux to ensure consistent data flow across all
              components, producing structured, print-ready invoices seamlessly without any backend dependency.
            </Text>
          </View>
        </View>

        {/* Certifications */}
        <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
        <View style={styles.divider} />
        <View style={styles.jobRow}>
          <Text style={styles.jobTitle}>MERN Stack - Full Stack Development Course</Text>
          <Text style={styles.jobMeta}>Feb 2026</Text>
        </View>
        <Text style={styles.jobMeta}>GUVI</Text>

        {/* Languages */}
        <Text style={styles.sectionTitle}>LANGUAGES</Text>
        <View style={styles.divider} />
        <View style={styles.skillsRow}>
          {["English", "Tamil — Native"].map((lang) => (
            <Text key={lang} style={styles.skillBadge}>{lang}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default ResumePDF;