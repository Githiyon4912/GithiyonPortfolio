import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#222",
    backgroundColor: "#fff",
  },

  header: {
    padding: "30 20",
    marginBottom: 0,
  },
  headerName: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: "#1a365d",
    marginBottom: 4,
  },
  headerRole: {
    fontSize: 11,
    color: "#426a92",
    letterSpacing: 1,
    marginBottom: 12,
  },
  headerContactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    fontSize: 9,
    color: "#7c7c84",
  },
  headerContactItem: {
    color: "#7c7c84",
    marginRight: 10,
  },

  body: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },

  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.5,
    color: "#1a365d",
    marginTop: 16,
    marginBottom: 4,
    textTransform: "uppercase",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    marginBottom: 8,
  },

  summaryText: {
    fontSize: 10,
    color: "#444",
    lineHeight: 1.6,
  },

  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 4,
  },
  skillBadge: {
    fontSize: 9,
    color: "#7c7c84",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#1a365d",
  },
  jobDate: {
    fontSize: 9,
    color: "#64748b",
  },
  jobCompany: {
    fontSize: 10,
    color: "#426a92",
    fontFamily: "Helvetica-Bold",
    marginBottom: 1,
  },
  jobLocation: {
    fontSize: 9,
    color: "#64748b",
    marginBottom: 5,
  },

  bullet: {
    flexDirection: "row",
    marginBottom: 4,
    paddingLeft: 4,
  },
  bulletDot: {
    marginRight: 5,
    fontSize: 10,
    color: "#426a92",
  },
  bulletText: {
    fontSize: 10,
    color: "#444",
    lineHeight: 1.5,
    flex: 1,
  },

  projectTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#1a365d",
  },
  projectDate: {
    fontSize: 9,
    color: "#64748b",
  },

  certTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#1a365d",
    marginBottom: 1,
  },
  certIssuer: {
    fontSize: 9,
    color: "#64748b",
  },
  langRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },
  langBadge: {
    fontSize: 9,
    color: "#7c7c84",
  },
});

function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerName}>GITHIYON M</Text>
          <Text style={styles.headerRole}>Frontend Developer</Text>
          <View style={styles.headerContactRow}>
            <Text style={styles.headerContactItem}>
              githiyonm4912@gmail.com |
            </Text>
            <Text style={styles.headerContactItem}>9003255653 |</Text>
            <Text style={styles.headerContactItem}>
              No:26, Thomyar street, kamarajapuram, chennai-600070
            </Text>
          </View>
          <View style={[styles.headerContactRow, { marginTop: 4 }]}>
            <Link
              src="https://linkedin.com/in/githiyon-m"
              style={[styles.headerContactItem, { color: "#7c7c84" }]}
            >
              linkedin.com/in/githiyon-m
            </Link>
            <Text style={styles.headerContactItem}> | </Text>
            <Link
              src="https://github.com/GITHIYON49"
              style={[styles.headerContactItem, { color: "#7c7c84" }]}
            >
              github.com/GITHIYON49
            </Link>
            <Text style={styles.headerContactItem}> | </Text>
            <Link
              src="https://githiyonm.netlify.app/"
              style={[styles.headerContactItem, { color: "#7c7c84" }]}
            >
              githiyonm.netlify.app
            </Link>
          </View>
        </View>
        <View style={styles.divider} />

        <View style={styles.body}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <View style={styles.divider} />
          <Text style={styles.summaryText}>
            Full Stack Developer with 10 months of hands on frontend experience
            in a startup environment and a completed fullstack development
            course, specializing in building dynamic web applications using
            React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.
          </Text>

          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.divider} />
          <View style={styles.skillsRow}>
            {[
              "JavaScript",
              "Html",
              "Css",
              "React",
              "Tailwind CSS",
              "Redux",
              "Node.js",
              "MongoDb",
            ].map((skill) => (
              <Text key={skill} style={styles.skillBadge}>
                {skill}
              </Text>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Experience</Text>
          <View style={styles.divider} />
          <View style={styles.rowBetween}>
            <Text style={styles.jobTitle}>Frontend Developer</Text>
            <Text style={styles.jobDate}>Dec 2024 - Oct 2025</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.jobCompany}>Digital Pebbles</Text>
            <Text style={styles.jobDate}>Pozhichalur, Chennai</Text>
          </View>

          <View style={styles.bullet}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletText}>
              Developed a fully responsive product catalog website for a
              hardware company using React.js and Tailwind CSS, featuring
              dynamic routing, reusable components, and interactive product
              views.
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Projects</Text>
          <View style={styles.divider} />
          <View style={styles.rowBetween}>
            <Text style={styles.projectTitle}>Invoice Builder</Text>
            <Text style={styles.projectDate}>2025-12-10 - 2025-12-30</Text>
          </View>
          <View style={[styles.bullet, { marginTop: 4 }]}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletText}>
              Built a responsive Invoice Builder using React.js and Tailwind CSS
              with real time calculations for subtotal, tax, and total,
              delivering a clean and professional UI.
            </Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletText}>
              Implemented client side PDF generation and managed complex state
              with Redux to ensure seamless data flow and consistent application
              performance without backend dependency.
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.divider} />
          <View style={styles.rowBetween}>
            <Text style={styles.jobTitle}>
              Bachelor of Computer Applications
            </Text>
            <Text style={styles.jobDate}>2021</Text>
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.jobCompany}>
              Tagore College Of Arts & Science
            </Text>
            <Text style={styles.jobDate}>Chrompet, Chennai</Text>
          </View>
          <Text style={styles.jobLocation}>Computer Science</Text>

          <Text style={styles.sectionTitle}>Certifications</Text>
          <View style={styles.divider} />
          <Text style={styles.certTitle}>Full Stack Development Course</Text>
          <Text style={styles.certIssuer}>Guvi HCL</Text>

          <Text style={styles.sectionTitle}>Languages</Text>
          <View style={styles.divider} />
          <View style={styles.langRow}>
            {["Tamil (Native)", "English"].map((lang) => (
              <Text key={lang} style={styles.langBadge}>
                {lang}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default ResumePDF;
