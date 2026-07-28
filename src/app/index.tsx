import { Platform, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.contentContainer}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.card}>
          <HeroSection />
          <TagRow />
          <QuickProfile />
          <RecentProjects />
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ScrollView>
  );
}

function HeroSection() {
  return (
    <ThemedView style={styles.heroSection}>
      <AnimatedIcon />
      <ThemedView style={styles.heroText}>
        <ThemedText type="code" style={styles.eyebrow}>
          • portfolio •
        </ThemedText>
        <ThemedText type="title" style={styles.title}>
          Hi, I'm Kris.
        </ThemedText>
        <ThemedText themeColor="textSecondary" style={styles.subtitle}>
          I am a BSIT student building practical web and mobile applications with an eye for clean, minimalist design.
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

function TagRow() {
  return (
    <ThemedView style={styles.tagRow}>
      <ThemedView type="backgroundElement" style={styles.tag}>
        <ThemedText type="smallBold" style={styles.tagText}>STUDENT</ThemedText>
      </ThemedView>
      <ThemedView type="backgroundElement" style={styles.tag}>
        <ThemedText type="smallBold" style={styles.tagText}>DEVELOPER</ThemedText>
      </ThemedView>
      <ThemedView type="backgroundElement" style={styles.tag}>
        <ThemedText type="smallBold" style={styles.tagText}>FRONT END</ThemedText>
      </ThemedView>
      <ThemedView type="backgroundElement" style={styles.tag}>
        <ThemedText type="smallBold" style={styles.tagText}>BACK END</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

function QuickProfile() {
  return (
    <ThemedView type="backgroundElement" style={[styles.infoCard, styles.shadow]}>
      <ThemedText type="smallBold" style={styles.sectionTitle}>
        QUICK PROFILE
      </ThemedText>
      <HintRow
        title="Name"
        hint={<ThemedText type="smallBold">Kristopher John H. Penalosa</ThemedText>}
      />
      <HintRow title="Course" hint={<ThemedText type="code">BSIT</ThemedText>} />
      <HintRow title="Age" hint={<ThemedText type="code">21</ThemedText>} />
    </ThemedView>
  );
}

function RecentProjects() {
  return (
    <ThemedView type="backgroundElement" style={[styles.infoCard, styles.shadow]}>
      <ThemedText type="smallBold" style={styles.sectionTitle}>
        RECENT PROJECTS
      </ThemedText>
      <ThemedView style={styles.listContainer}>
        <ThemedText type="list" style={styles.listItem}>• Reservation System</ThemedText>
        <ThemedText type="list" style={styles.listItem}>• Online Ordering System</ThemedText>
        <ThemedText type="list" style={styles.listItem}>• Room Reservation System</ThemedText>
        <ThemedText type="list" style={styles.listItem}>• IoT Motion Detection Surveillance</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.five,
    paddingTop: Spacing.six,
    paddingBottom: BottomTabInset + Spacing.five,
    maxWidth: MaxContentWidth,
  },
  card: {
    alignSelf: 'stretch',
    padding: Spacing.two,
    gap: Spacing.five,
    backgroundColor: 'transparent',
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.four,
    paddingVertical: Spacing.three,
    backgroundColor: 'transparent',
  },
  heroText: {
    alignItems: 'center',
    gap: Spacing.two,
    backgroundColor: 'transparent',
  },
  eyebrow: {
    textTransform: 'uppercase',
    letterSpacing: 2,
    opacity: 0.6,
  },
  title: {
    textAlign: 'center',
    fontSize: 42,
    fontWeight: '800',
    letterSpacing: -1,
  },
  subtitle: {
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 16,
    paddingHorizontal: Spacing.three,
    opacity: 0.8,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    justifyContent: 'center',
    marginBottom: Spacing.three,
    backgroundColor: 'transparent',
  },
  tag: {
    borderRadius: 999,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one + Spacing.half,
    borderWidth: 1,
    borderColor: 'rgba(150,150,150,0.15)',
  },
  tagText: {
    fontSize: 11,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  infoCard: {
    borderRadius: Spacing.four,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.four,
    gap: Spacing.three,
    borderWidth: 1,
    borderColor: 'rgba(150,150,150,0.1)',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
      },
    }),
  },
  sectionTitle: {
    marginBottom: Spacing.one,
    letterSpacing: 1.5,
    fontSize: 12,
    opacity: 0.6,
  },
  listContainer: {
    gap: Spacing.two,
    backgroundColor: 'transparent',
  },
  listItem: {
    lineHeight: 22,
    fontSize: 14,
  },
});
