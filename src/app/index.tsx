import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView type="backgroundElement" style={styles.card}>
          <ThemedView style={styles.heroSection}>
            <AnimatedIcon />
            <ThemedView style={styles.heroText}>
              <ThemedText type="code" style={styles.eyebrow}>
                portfolio / 2026
              </ThemedText>
              <ThemedText type="title" style={styles.title}>
                Hi, I'm Kris.
              </ThemedText>
              <ThemedText themeColor="textSecondary" style={styles.subtitle}>
                A BSIT student creating practical web and mobile experiences with an eye for clean
                design and usability.
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.tagRow}>
            <ThemedView type="backgroundSelected" style={styles.tag}>
              <ThemedText type="smallBold">Student</ThemedText>
            </ThemedView>
            <ThemedView type="backgroundSelected" style={styles.tag}>
              <ThemedText type="smallBold">Developer</ThemedText>
            </ThemedView>
            <ThemedView type="backgroundSelected" style={styles.tag}>
              <ThemedText type="smallBold">Design-minded</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView type="background" style={styles.infoCard}>
            <ThemedText type="smallBold" style={styles.sectionTitle}>
              Quick profile
            </ThemedText>
            <HintRow
              title="Name"
              hint={<ThemedText type="smallBold">Kristopher John H. Penalosa</ThemedText>}
            />
            <HintRow title="Course" hint={<ThemedText type="code">BSIT</ThemedText>} />
            <HintRow title="Age" hint={<ThemedText type="code">21</ThemedText>} />
          </ThemedView>

          <ThemedView type="background" style={styles.infoCard}>
            <ThemedText type="smallBold" style={styles.sectionTitle}>
              Recent projects
            </ThemedText>
            <ThemedText type="list" style={styles.listContent}>
              • Reservation System
              {'\n'}• Online Ordering System
              {'\n'}• Room Reservation System
              {'\n'}• IoT-based Motion Detection with Camera for Surveillance
            </ThemedText>
          </ThemedView>
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  card: {
    alignSelf: 'stretch',
    padding: Spacing.four,
    borderRadius: Spacing.four,
    gap: Spacing.three,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.three,
    paddingVertical: Spacing.two,
  },
  heroText: {
    alignItems: 'center',
    gap: Spacing.one,
  },
  eyebrow: {
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    lineHeight: 22,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  tag: {
    borderRadius: 999,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
  },
  infoCard: {
    borderRadius: Spacing.three,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    gap: Spacing.two,
  },
  sectionTitle: {
    marginBottom: Spacing.half,
  },
  listContent: {
    lineHeight: 20,
  },
});
