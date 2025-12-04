-- ============================================
-- MIGRATION POLICY - TEMPORARY
-- ============================================
-- Run this BEFORE migration, then remove after migration is complete
-- Bu SQL'i migration öncesi çalıştır, sonra kaldır

-- Temporarily allow public insert for migration
CREATE POLICY "Allow public insert for migration" ON products FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert brands" ON brands FOR INSERT WITH CHECK (true);

-- ============================================
-- AFTER MIGRATION - RUN THIS TO SECURE
-- ============================================
-- DROP POLICY "Allow public insert for migration" ON products;
-- DROP POLICY "Allow public insert brands" ON brands;
