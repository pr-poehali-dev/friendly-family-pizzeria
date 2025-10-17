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
    {
      id: 1,
      name: 'Маргарита',
      description: 'Томатный соус, моцарелла, базилик',
      price: 450,
      category: 'pizza',
      image: 'https://cdn.poehali.dev/projects/4e0be589-5aff-42ae-8b57-0e07507095b0/files/f3abaea0-5388-406d-b212-077bc7d0a96f.jpg'
    },
    {
      id: 2,
      name: 'Семейная',
      description: 'Ветчина, грибы, помидоры, сыр',
      price: 590,
      category: 'pizza',
      image: 'https://cdn.poehali.dev/projects/4e0be589-5aff-42ae-8b57-0e07507095b0/files/081a11a8-d492-431b-8dd4-dc9b59f40c67.jpg'
    },
    {
      id: 3,
      name: 'Пепперони',
      description: 'Острая салями, моцарелла, томатный соус',
      price: 520,
      category: 'pizza',
      image: 'https://cdn.poehali.dev/projects/4e0be589-5aff-42ae-8b57-0e07507095b0/files/f3abaea0-5388-406d-b212-077bc7d0a96f.jpg'
    },
    {
      id: 4,
      name: 'Четыре сыра',
      description: 'Моцарелла, пармезан, дор блю, чеддер',
      price: 650,
      category: 'pizza',
      image: 'https://cdn.poehali.dev/projects/4e0be589-5aff-42ae-8b57-0e07507095b0/files/081a11a8-d492-431b-8dd4-dc9b59f40c67.jpg'
    }
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
                Каждая пицца приготовлена с любовью
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                      <Button size="sm">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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