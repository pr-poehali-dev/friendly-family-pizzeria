import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 1, name: 'Чикен', description: 'рис, нори, сыр, курица, огурец', price: 170, category: 'Фирменные роллы' },
    { id: 2, name: 'Овощной Маки', description: 'рис, нори, сыр огурец, помидор, болгарский перец, салат айсберг', price: 200, category: 'Фирменные роллы' },
    { id: 3, name: 'Филадельфия Маки', description: 'рис, нори, сыр, огурец, лосось', price: 300, category: 'Фирменные роллы' },
    { id: 4, name: 'Эби Темпура', description: 'рис, нори, сыр, тигровая креветка х/к, масаго', price: 300, category: 'Фирменные роллы' },
    { id: 5, name: 'Калифорния с крабом', description: 'рис, нори, масаго, сыр, снежный краб, огурец', price: 250, category: 'Фирменные роллы' },
    { id: 6, name: 'Калифорния с креветкой', description: 'рис, нори, сыр масаго, креветка тигровая, огурец', price: 350, category: 'Фирменные роллы' },
    { id: 7, name: 'Калифорния с лососем', description: 'рис, нори, лосось, масаго, сыр, огурец', price: 350, category: 'Фирменные роллы' },
    { id: 8, name: 'Калифорния с тунцом', description: 'рис, нори, масаго, сыр, тунец, огурец', price: 400, category: 'Фирменные роллы' },
    { id: 9, name: 'Осака', description: 'рис, нори, сыр, огурец, лосось х/к, спайси, масаго зеленая', price: 400, category: 'Фирменные роллы' },
    { id: 10, name: 'Киото', description: 'рис, нори, креветка в темпуре, соус спайси, помидор, салат айсберг', price: 400, category: 'Фирменные роллы' },
    { id: 11, name: 'Цезарь-ролл', description: 'рис, нори, курица, салат айсберг, курица, сыр, пармезан, чесно', price: 350, category: 'Фирменные роллы' },
    { id: 12, name: 'Канада', description: 'рис, нори, лосось, угорь, сыр, огурец, унаги соус, кунжут', price: 450, category: 'Фирменные роллы' },
    { id: 13, name: 'VIP', description: 'рис, нори, сыр, снежный краб, помидор, тигровая креветка', price: 500, category: 'Фирменные роллы' },
    { id: 14, name: 'Филадельфия', description: 'рис, нори, сыр, лосось', price: 350, category: 'Фирменные роллы' },
    { id: 15, name: 'Спайси курица с айсбергом', description: 'рис, нори, курица, сыр, салат айсберг, спайси соус', price: 350, category: 'Фирменные роллы' },
    { id: 16, name: 'Филадельфия с креветкой', description: 'рис, нори, лосось, тигровая креветка, сыр', price: 400, category: 'Фирменные роллы' },
    { id: 17, name: 'Филадельфия с угрем', description: 'рис, нори, лосось, угорь, сыр', price: 400, category: 'Фирменные роллы' },
    { id: 18, name: 'Филадельфия копченая', description: 'рис, нори, сыр, огурец, лосось х/к', price: 450, category: 'Фирменные роллы' },
    { id: 19, name: 'Дракон', description: 'рис, нори, сыр, авакадо, угорь, копченый лосось', price: 700, category: 'Фирменные роллы' },
    { id: 20, name: 'Ролл с креветкой', description: 'рис, нори, креветка', price: 200, category: 'Классические роллы' },
    { id: 21, name: 'Ролл с лососем', description: 'рис, нори, лосось', price: 250, category: 'Классические роллы' },
    { id: 22, name: 'Ролл с авокадо', description: 'рис, нори, авокадо', price: 150, category: 'Классические роллы' },
    { id: 23, name: 'Ролл с огурцом', description: 'рис, нори, огурец', price: 100, category: 'Классические роллы' },
    { id: 24, name: 'Ролл с крабом', description: 'рис, нори, краб', price: 200, category: 'Классические роллы' },
    { id: 25, name: 'Ролл с угрем', description: 'рис, нори, угорь, унаги соус, кунжут', price: 200, category: 'Классические роллы' },
    { id: 26, name: 'Ролл с тунцом', description: 'рис, нори, тунец', price: 200, category: 'Классические роллы' },
    { id: 27, name: 'Ролл с чукой', description: 'рис, нори, чука', price: 100, category: 'Классические роллы' },
    { id: 28, name: 'WOK с морепродуктами', description: 'пшеничная лапша тигровыми креветками, мидиями, кальмаром и сочными овощами в устричном соусе', price: 400, category: 'WOK' },
    { id: 29, name: 'WOK с курицей', description: 'пшеничная лапша с сочными овощами и нежной куриной грудкой в соусе терияки', price: 350, category: 'WOK' },
    { id: 30, name: 'Карбонара', description: 'феттучини в сливочном соусе с обжаренными ломтиками бекона, под сырой поризкой', price: 450, category: 'Паста' },
    { id: 31, name: 'С курицей и грибами', description: 'феттучини с сочным филе куриной грудки, шампиньонами в сливочном соусе, под сырной поризкой', price: 500, category: 'Паста' },
    { id: 32, name: 'С морепродуктами', description: 'феттучини в сливочно-томатном соусе с мидиями, кальмарами и осминогами, под сырой поризкой', price: 500, category: 'Паста' },
    { id: 33, name: 'Паста Том-Ям', description: 'феттучини с креветками и брокколи в остром соусе том-ям, под сырой поризкой', price: 500, category: 'Паста' },
    { id: 34, name: 'Запеченный с крабом', description: 'рис, нори, сыр, огурец, лосось, снежный краб, кунжут, фирменный соус', price: 300, category: 'Запеченные роллы' },
    { id: 35, name: 'Запеченный с креветкой', description: 'рис, нори, сыр, огурец, лосось, тигровые, кунжут, фирменный соус', price: 350, category: 'Запеченные роллы' },
    { id: 36, name: 'Запеченный с лососем', description: 'рис, нори, сыр, огурец, лосось, кунжут, фирменный соус', price: 400, category: 'Запеченные роллы' },
    { id: 37, name: 'Калифорния запеченная', description: 'рис, нори, сыр, авокадо, снежный краб, креветка, масаго, фирменный соус', price: 350, category: 'Запеченные роллы' },
    { id: 38, name: 'Запеченная Филадельфия', description: 'рис, нори, сыр, лосось, фирменный соус, унаги, кунжут', price: 450, category: 'Запеченные роллы' },
    { id: 39, name: 'Запеченный с тунцом', description: 'рис, нори, сыр, огурец, тунец, кунжут, фирменный соус', price: 450, category: 'Запеченные роллы' },
    { id: 40, name: 'Мидзо', description: 'рис, нори, сыр, огурец, лосось, тигровая креветка, лук зеленый, фирменный соус', price: 450, category: 'Запеченные роллы' },
    { id: 41, name: 'Чикаго', description: 'рис, нори, сыр, огурец, бекон, лук зеленый, фирменный соус, унаги соус', price: 400, category: 'Запеченные роллы' },
    { id: 42, name: 'Сырная креветка', description: 'рис, нори, сыр, снежный краб, тигровая креветка, фирменный соус, унаги соус', price: 400, category: 'Запеченные роллы' },
    { id: 43, name: 'Темпура Бекон', description: 'рис, нори, курица, бекон, сырный соус', price: 200, category: 'Темпура' },
    { id: 44, name: 'Темпура Цезарь', description: 'рис, нори, сыр, курица, помидор, лист салата', price: 200, category: 'Темпура' },
    { id: 45, name: 'Темпура Краб', description: 'рис, нори, снежный краб, сыр, огурец', price: 220, category: 'Темпура' },
    { id: 46, name: 'Темпура Креветка', description: 'рис, нори, сыр, креветка, огурец', price: 250, category: 'Темпура' },
    { id: 47, name: 'Темпура с лососем', description: 'рис, нори, сыр, лосось, огурец', price: 300, category: 'Темпура' },
    { id: 48, name: 'Темпура Тунец', description: 'рис, нори, сыр, тунец, огурец', price: 300, category: 'Темпура' },
    { id: 49, name: 'Киото Темпура', description: 'рис, нори, сыр, лосось, тигровая креветка, огурец, масаго', price: 450, category: 'Темпура' },
    { id: 50, name: 'Сет Темпура (24шт)', description: 'темпура лосось, темпура креветка, темпура краб', price: 800, category: 'Сеты' },
    { id: 51, name: 'Три Хита (24шт)', description: 'Филадельфия, канада, калифорния с креветкой', price: 1200, category: 'Сеты' },
    { id: 52, name: 'Сет Классик (64шт)', description: 'ролл с огурцом, ролл с лососем, ролл с угрем, ролл с крабом, ролл с тунцом, ролл с креветкой, ролл с чукой, ролл с авокадо', price: 1100, category: 'Сеты' },
    { id: 53, name: 'Сет Филадельфия (32шт)', description: 'Филадельфия классическая, Филадельфия с креветкой, Филадельфия с угрем, Филадельфия запеченная', price: 1500, category: 'Сеты' },
    { id: 54, name: 'Горячая Япония (32шт)', description: 'темпура бекон, темпура лосось, запеченный с креветкой, запеченный с тунцом', price: 1000, category: 'Сеты' },
    { id: 55, name: 'Сет Запеченный (32шт)', description: 'запеченный с тунцом, запеченный с крабом, запеченная Филадельфия, запеченная Калифорния', price: 1000, category: 'Сеты' },
    { id: 56, name: 'Япония Сет (104шт)', description: 'ролл с огурцом, овощной, Филадельфия, калифорния краб, канада, осака, Филадельфия маки, запеченный с креветкой, запеченный с тунцом, темпура лосось, темпура креветка, темпура краб, с крабом', price: 3000, category: 'Сеты' },
    { id: 57, name: 'Сет "Дружная семья" (56шт)', description: 'Филадельфия, калифорния краб, запеченный с креветкой, запечённый с лососем, запечённый чикаго, темпура тунец, ролл с огурцом', price: 1600, category: 'Сеты' },
    { id: 58, name: 'Веган Сет (32шт)', description: 'овощной ролл с огурцом, ролл с авокадо, ролл с чукой', price: 500, category: 'Сеты' }
  ];

  const promos = [
    {
      title: 'Семейная среда',
      description: 'Каждую среду скидка 20% на все пиццы при заказе от 2-х штук',
      icon: 'Users'
    },
    {
      title: 'Детский день рождения',
      description: 'Бесплатная пицца имениннику до 12 лет',
      icon: 'Gift'
    },
    {
      title: 'Быстрая доставка',
      description: 'Доставим за 30 минут или пицца в подарок',
      icon: 'Clock'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🍕</div>
              <div>
                <h1 className="text-2xl font-bold text-primary brand-title">ДРУЖНАЯ СЕМЬЯ</h1>
                <p className="text-sm text-muted-foreground">Пиццерия с душой</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'menu' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Меню
              </button>
              <button
                onClick={() => scrollToSection('delivery')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'delivery' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Доставка
              </button>
              <button
                onClick={() => scrollToSection('promos')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'promos' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Акции
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'about' ? 'text-primary' : 'text-foreground'
                }`}
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Контакты
              </button>
            </nav>

            <Button className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-background"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="animate-fade-in">
                <Badge className="mb-4 bg-accent">Семейная атмосфера</Badge>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Вкус домашнего <span className="text-primary">уюта</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Готовим с любовью, как для своей семьи. Свежие ингредиенты,
                  проверенные рецепты и тёплая атмосфера ждут вас!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => scrollToSection('menu')}>
                    <Icon name="UtensilsCrossed" size={20} className="mr-2" />
                    Смотреть меню
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                    <Icon name="MapPin" size={20} className="mr-2" />
                    Как добраться
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наше меню</h2>
              <p className="text-lg text-muted-foreground">
                Свежие роллы, вок и паста каждый день
              </p>
            </div>
            
            {['Фирменные роллы', 'Классические роллы', 'Запеченные роллы', 'Темпура', 'WOK', 'Паста', 'Сеты'].map((category) => {
              const categoryItems = menuItems.filter(item => item.category === category);
              if (categoryItems.length === 0) return null;
              
              return (
                <div key={category} className="mb-16">
                  <h3 className="text-3xl font-bold mb-8 text-center">{category}</h3>
                  <div className="max-w-4xl mx-auto space-y-4">
                    {categoryItems.map((item) => (
                      <Card key={item.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                              <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                            <div className="flex items-center gap-4 flex-shrink-0">
                              <span className="text-2xl font-bold text-primary whitespace-nowrap">{item.price} ₽</span>
                              <Button size="sm">
                                <Icon name="ShoppingCart" size={16} className="mr-2" />
                                В корзину
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="delivery" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Доставка</h2>
              <p className="text-lg text-muted-foreground">
                Быстро, надёжно, с заботой о вас
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Bike" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Быстрая доставка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Доставим горячую пиццу за 30-40 минут
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Зона доставки</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Доставка в радиусе 5 км от пиццерии
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Wallet" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Бесплатно от 1000 ₽</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    При заказе от 1000 ₽ доставка бесплатная
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="promos" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Акции</h2>
              <p className="text-lg text-muted-foreground">
                Выгодные предложения для всей семьи
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {promos.map((promo, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="mb-4 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={promo.icon as any} size={28} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{promo.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{promo.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <img
                  src="https://cdn.poehali.dev/projects/4e0be589-5aff-42ae-8b57-0e07507095b0/files/081a11a8-d492-431b-8dd4-dc9b59f40c67.jpg"
                  alt="Свежие ингредиенты"
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">О нас</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    Пиццерия "ДРУЖНАЯ СЕМЬЯ" - это место, где традиции итальянской кухни
                    встречаются с домашним уютом и заботой.
                  </p>
                  <p>
                    Мы открылись в 2015 году с одной целью: создать место, где каждый
                    гость чувствует себя как дома. Наши повара используют только свежие
                    ингредиенты и готовят каждую пиццу с душой.
                  </p>
                  <p>
                    Наша философия проста: качественные продукты, проверенные рецепты
                    и искренняя забота о наших гостях. Мы готовим так, как готовили бы
                    для своей семьи.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">лет работы</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">5000+</div>
                    <div className="text-sm text-muted-foreground">довольных гостей</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">20+</div>
                    <div className="text-sm text-muted-foreground">видов пиццы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">
                Будем рады видеть вас!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-center">Адрес</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    г. Курганинск, ул. Первомайская, д. 3К
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-center">Телефон</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    8 988 528 85 52
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-center">Режим работы</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Ежедневно с 10:00 до 23:00
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">🍕</div>
                <h3 className="text-xl font-bold brand-title">ДРУЖНАЯ СЕМЬЯ</h3>
              </div>
              <p className="text-background/80">
                Пиццерия с душой и домашней атмосферой
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-background/80">
                <li><button onClick={() => scrollToSection('menu')} className="hover:text-background">Меню</button></li>
                <li><button onClick={() => scrollToSection('delivery')} className="hover:text-background">Доставка</button></li>
                <li><button onClick={() => scrollToSection('promos')} className="hover:text-background">Акции</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-background">О нас</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li>8 988 528 85 52</li>
                <li>info@семья.рф</li>
                <li>г. Курганинск, ул. Первомайская, 3К</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>© 2024 ДРУЖНАЯ СЕМЬЯ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;