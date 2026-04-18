// Smart Gym Camera + Machine Dashboard (C++ with Qt)

#include <QApplication>
#include <QMainWindow>
#include <QWidget>
#include <QPushButton>
#include <QVBoxLayout>
#include <QHBoxLayout>
#include <QLabel>
#include <QStackedWidget>

class GymDashboard : public QMainWindow {
public:
    GymDashboard() {
        setWindowTitle("GYM AI Dashboard");
        resize(1100, 650);

        QWidget *central = new QWidget();
        setCentralWidget(central);

        QHBoxLayout *mainLayout = new QHBoxLayout(central);

        // Sidebar
        QWidget *sidebar = new QWidget();
        sidebar->setFixedWidth(220);
        sidebar->setStyleSheet("background:#1a1a1a;");

        QVBoxLayout *sideLayout = new QVBoxLayout(sidebar);

        QLabel *title = new QLabel("GYM AI");
        title->setStyleSheet("color:#00ff99; font-size:24px; font-weight:bold;");
        title->setAlignment(Qt::AlignCenter);

        QPushButton *cameraBtn = new QPushButton("Live Camera");
        QPushButton *machineBtn = new QPushButton("Machines");
        QPushButton *exitBtn = new QPushButton("Exit");

        QString btnStyle =
            "QPushButton {background:#222; color:white; padding:12px; border:none;}"
            "QPushButton:hover {background:#00ff99; color:black;}";

        cameraBtn->setStyleSheet(btnStyle);
        machineBtn->setStyleSheet(btnStyle);
        exitBtn->setStyleSheet("background:#ff3333; color:white; padding:12px;");

        sideLayout->addWidget(title);
        sideLayout->addWidget(cameraBtn);
        sideLayout->addWidget(machineBtn);
        sideLayout->addStretch();
        sideLayout->addWidget(exitBtn);

        // Main Area
        QWidget *mainArea = new QWidget();
        QVBoxLayout *mainV = new QVBoxLayout(mainArea);

        QLabel *topbar = new QLabel("Smart Gym Monitoring System");
        topbar->setStyleSheet("background:#111; color:white; font-size:24px; font-weight:bold; padding:15px;");
        topbar->setAlignment(Qt::AlignCenter);

        pages = new QStackedWidget();

        // Camera Page
        QWidget *cameraPage = new QWidget();
        QVBoxLayout *camLayout = new QVBoxLayout(cameraPage);

        QLabel *camFeed = new QLabel("📷 Camera Feed");
        camFeed->setAlignment(Qt::AlignCenter);
        camFeed->setStyleSheet("background:black; color:gray; font-size:28px; min-height:400px;");

        camLayout->addWidget(camFeed);

        // Machines Page
        QWidget *machinePage = new QWidget();
        QVBoxLayout *machineLayout = new QVBoxLayout(machinePage);

        QStringList machines = {
            "🏃 Treadmill : Active",
            "🏋 Bench Press : Available",
            "🚴 Bike : In Use",
            "🔥 Calories Burned Today : 1240"
        };

        for(QString item : machines) {
            QLabel *lbl = new QLabel(item);
            lbl->setStyleSheet("background:#222; color:white; padding:15px; font-size:18px;");
            machineLayout->addWidget(lbl);
        }

        pages->addWidget(cameraPage);
        pages->addWidget(machinePage);

        mainV->addWidget(topbar);
        mainV->addWidget(pages);

        mainLayout->addWidget(sidebar);
        mainLayout->addWidget(mainArea);

        connect(cameraBtn, &QPushButton::clicked, [=]() {
            pages->setCurrentIndex(0);
        });

        connect(machineBtn, &QPushButton::clicked, [=]() {
            pages->setCurrentIndex(1);
        });

        connect(exitBtn, &QPushButton::clicked, this, &QMainWindow::close);
    }

private:
    QStackedWidget *pages;
};

int main(int argc, char *argv[]) {
    QApplication app(argc, argv);

    GymDashboard window;
    window.show();

    return app.exec();
}
