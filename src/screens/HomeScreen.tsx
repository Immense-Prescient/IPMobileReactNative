import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Button, Card} from '../components';
import {useProducts} from '../hooks/useProducts';
import {formatCurrency} from '../utils/formatters';
import {COLORS, SPACING} from '../constants';
import {Product} from '../types';

export const HomeScreen: React.FC = () => {
  const {products, loading, error, refetch} = useProducts();

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
        <Button title="Retry" onPress={refetch} />
      </View>
    );
  }

  const renderProduct = ({item}: {item: Product}) => (
    <Card style={styles.productCard}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>{formatCurrency(item.price)}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Demo Products</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.md,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    padding: SPACING.lg,
  },
  listContent: {
    padding: SPACING.md,
    gap: SPACING.md,
  },
  productCard: {
    marginBottom: SPACING.sm,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  productDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  errorText: {
    fontSize: 16,
    color: COLORS.error,
    marginBottom: SPACING.md,
  },
});
